import { useNavigate } from 'react-router'
import { TwoFactorEnrollmentForm } from 'synapse-react-client'

export default function TwoFactorAuthEnrollmentPage() {
  const navigate = useNavigate()
  return (
    <TwoFactorEnrollmentForm
      onTwoFactorEnrollmentSuccess={() =>
        // explicitly skip the backup code overwrite warning and generate new codes
        navigate('/authenticated/2fa/generatecodes?warn=false')
      }
      onBackClicked={() => {
        navigate(-1)
      }}
    />
  )
}
