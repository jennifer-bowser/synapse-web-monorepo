import {
  FormControl,
  InputLabel,
  Box,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
  Button,
  useTheme,
} from '@mui/material'
import { FormEvent, useState } from 'react'

type FieldType = typeof TextField | typeof Select

type FieldConfig = {
  componentType: FieldType
  label: string
  helperText: string
  placeholder?: string
  isRequired: boolean
  selections?: {
    [id: string]: string
  }
  additionalOptions?: {
    [id: string]: any
  }
}

export type FieldSchema = {
  [fieldId: string]: FieldConfig
}

export type FormData = {
  [id: string]: string
}

type Errors = {
  [id: string]: boolean
}

export type FormProps = {
  fields: FieldSchema
  onSubmit: (data: FormData) => boolean
}

export default function Form({ fields, onSubmit }: FormProps) {
  const [formData, setFormData] = useState(
    Object.fromEntries(Object.keys(fields).map(id => [id, ''])),
  )
  const [errors, setErrors] = useState<Errors>({})
  const theme = useTheme()

  const handleChange = (id: string, value: string) => {
    setErrors((prev: Errors) => {
      if (!prev[id]) return prev
      return { ...prev, [id]: false }
    })

    setFormData((prev: FormData) => {
      if (prev[id] === value) return prev
      return { ...prev, [id]: value }
    })
  }

  const handleSubmission = (evt: FormEvent) => {
    evt.preventDefault()

    // Error handling
    const newErrors: Errors = {}
    for (const id of Object.keys(formData)) {
      if (fields[id].isRequired && formData[id].length === 0) {
        newErrors[id] = true
      }
    }

    setErrors(() => {
      return newErrors
    })

    // Prevent submission if there are errors
    let wasSuccessful = false
    if (Object.keys(newErrors).length === 0) {
      wasSuccessful = onSubmit(formData)
    }

    // Clear the form on successful submission
    if (wasSuccessful) {
      setFormData({})
    }
  }

  const createField = (id: string, config: FieldConfig) => {
    if (config.componentType === Select) {
      const placeholderText = 'Select a Category'
      return (
        <FormControl
          fullWidth
          margin="normal"
          required={config.isRequired}
          key={id}
        >
          <InputLabel
            id={`${id}-label`}
            sx={{ position: 'relative', bottom: '20px' }}
            error={errors[id] ?? false}
          >
            {config.label}
          </InputLabel>
          <Select
            fullWidth
            labelId={`${id}-label`}
            id={id}
            value={formData[id] || ''}
            onChange={e => handleChange(id, e.target.value)}
            displayEmpty
            renderValue={selected => {
              if (!selected) {
                return (
                  <span style={{ color: theme.palette.text.disabled }}>
                    {placeholderText}
                  </span>
                )
              }
              return selected
            }}
            {...config.additionalOptions}
          >
            <MenuItem value="" disabled>
              {placeholderText}
            </MenuItem>
            {Object.entries(config.selections ?? {}).map(([label, value]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText id={`${id}-helper-text`}>
            {config.helperText}
          </FormHelperText>
        </FormControl>
      )
    } else if (config.componentType === TextField) {
      return (
        <TextField
          key={id}
          id={id}
          value={formData[id] || ''}
          label={config.label}
          onChange={e => handleChange(id, e.target.value)}
          required={config.isRequired}
          helperText={config.helperText}
          placeholder={config?.placeholder}
          error={errors[id] ?? false}
          fullWidth
          {...config.additionalOptions}
        />
      )
    }
    return
  }

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      sx={{
        width: '100%',
        maxWidth: 700,
        minWidth: { xs: '90%', sm: 400 },
        rowGap: '20px',
      }}
      onSubmit={evt => handleSubmission(evt)}
      noValidate
    >
      {Object.entries(fields).map(([id, config]) => createField(id, config))}
      <Button type="submit">Submit</Button>
    </Box>
  )
}
