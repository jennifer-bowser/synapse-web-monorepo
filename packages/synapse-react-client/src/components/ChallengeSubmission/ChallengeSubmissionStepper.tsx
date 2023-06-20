import React, { useState } from 'react'
import { DockerCommit, DockerRepository } from '@sage-bionetworks/synapse-types'
import StepperDialog from '../StepperDialog'
import { Step } from '../StepperDialog/StepperDialog'
import { useSynapseContext } from '../../utils'
import SubmissionCommitList from './SubmissionCommitList'
import EvaluationQueueList from './EvaluationQueueList'
import { Typography } from '@mui/material'
import { EvaluationSubmission } from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import { EntityItem } from './ChallengeSubmission'
import { EntityType } from '@sage-bionetworks/synapse-types'

enum StepsEnum {
  SELECT_COMMIT = 'SELECT_COMMIT',
  SELECT_EVALUATION = 'SELECT_EVALUATION',
  SUBMISSION_SUCCESS = 'SUBMISSION_SUCCESS',
}
type StepKey = keyof typeof StepsEnum
type StepList = {
  [key in StepKey]: Step
}

const stepsDocker: StepList = {
  SELECT_COMMIT: {
    id: StepsEnum.SELECT_COMMIT,
    title: 'Select Commit for Submission',
    nextStep: StepsEnum.SELECT_EVALUATION,
    nextEnabled: false,
  },
  SELECT_EVALUATION: {
    id: StepsEnum.SELECT_EVALUATION,
    title: 'Select Evaluation Queue',
    previousStep: StepsEnum.SELECT_COMMIT,
    confirmStep: StepsEnum.SUBMISSION_SUCCESS,
    confirmButtonText: 'Submit',
  },
  SUBMISSION_SUCCESS: {
    id: StepsEnum.SUBMISSION_SUCCESS,
    title: 'Submission Successful!',
    confirmButtonText: 'Close',
    confirmEnabled: true,
  },
}

const stepsFile: StepList = {
  SELECT_COMMIT: { id: StepsEnum.SELECT_COMMIT, title: '' },
  SELECT_EVALUATION: {
    id: StepsEnum.SELECT_EVALUATION,
    title: 'Select Evaluation Queue',
    confirmStep: StepsEnum.SUBMISSION_SUCCESS,
    confirmButtonText: 'Submit',
  },
  SUBMISSION_SUCCESS: {
    id: StepsEnum.SUBMISSION_SUCCESS,
    title: 'Submission Successful!',
    confirmButtonText: 'Close',
    confirmEnabled: true,
  },
}

const getSteps = (entityType: EntityType.DOCKER_REPO | EntityType.FILE) => {
  return entityType === EntityType.DOCKER_REPO ? stepsDocker : stepsFile
}

type ChallengeSubmissionStepperProps = {
  projectId: string
  userId: string
  teamId: string | undefined
  entity: EntityItem
  entityType: EntityType.DOCKER_REPO | EntityType.FILE
  isShowingModal: boolean
  onClose: () => void
}

function ChallengeSubmissionStepper({
  projectId,
  userId,
  teamId,
  entity,
  entityType,
  isShowingModal,
  onClose,
}: ChallengeSubmissionStepperProps) {
  const { accessToken } = useSynapseContext()
  const steps = getSteps(entityType)
  const initialStep =
    entityType === EntityType.DOCKER_REPO
      ? steps.SELECT_COMMIT
      : steps.SELECT_EVALUATION
  const [step, setStep] = useState<Step>(initialStep)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [selectedCommit, setSelectedCommit] = useState<DockerCommit>()

  const [submissionName, setSubmissionName] = useState<string>('')
  const [selectedEval, setSelectedEval] = useState<string | undefined>()
  const [submissionError, setSubmissionError] = useState<string | undefined>()
  const [confirming, setConfirming] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const submitRepoForEvaluation = async () => {
    if (!entity.id || !selectedCommit) return

    const submission: EvaluationSubmission = {
      userId: userId,
      evaluationId: selectedEval!,
      entityId: entity.id,
      dockerRepositoryName: entity.repositoryName,
      dockerDigest: selectedCommit.digest,
      versionNumber: 1,
      teamId: teamId,
    }

    if (submissionName !== '') submission['name'] = submissionName
    try {
      await SynapseClient.submitToEvaluation(
        submission,
        entity.etag!,
        accessToken,
      )
    } catch (e) {
      setErrorMessage(e.message)
    }
  }

  const hide = () => {
    setErrorMessage(undefined)
    setSelectedCommit(undefined)
    setSubmissionName('')
    setSelectedEval(undefined)
    setSubmissionError(undefined)
    setConfirming(false)
    onClose()
    setStep(initialStep)
  }

  function handleStepChange(value?: StepsEnum) {
    console.log({ handleStepChange: value })
    if (!value || !steps[value]) return
    setErrorMessage(undefined)
    setStep(steps[value])
  }

  const onConfirmHandler = async () => {
    console.log('onConfirm')
    await submitRepoForEvaluation()
  }

  const onCommitChanged = (value: DockerCommit) => {
    console.log(value)
    setSelectedCommit(value)
    setStep({ ...step, nextEnabled: true })
  }

  function stepperContent() {
    switch (step.id) {
      case StepsEnum.SELECT_COMMIT:
        return (
          <SubmissionCommitList
            repository={entity}
            selectedCommit={selectedCommit}
            onCommitChanged={onCommitChanged}
          />
        )
        break
      case StepsEnum.SELECT_EVALUATION:
        return (
          <EvaluationQueueList
            projectId={projectId}
            submissonName={submissionName}
            onSubmissionNameChange={setSubmissionName}
            selectedEvaluation={selectedEval}
            onEvaluationChange={value => {
              setStep({ ...step, confirmEnabled: true })
              setSelectedEval(value)
            }}
          />
        )
      case StepsEnum.SUBMISSION_SUCCESS:
        return (
          <Typography variant="body1" sx={{ fontSize: '16px' }}>
            Your submission will be scored and results posted to the Challenge
            Leaderboard.
          </Typography>
        )
      default:
        return <></>
    }
  }

  return (
    <StepperDialog
      errorMessage={errorMessage}
      onCancel={hide}
      onStepChange={handleStepChange as (arg: string) => void}
      open={isShowingModal}
      onConfirm={onConfirmHandler}
      confirming={confirming}
      step={step}
      content={stepperContent()}
      loading={loading}
    />
  )
}

export default ChallengeSubmissionStepper
