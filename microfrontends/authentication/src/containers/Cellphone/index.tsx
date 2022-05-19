import { object, string } from 'yup'
import { useNavigate } from 'react-router-dom'
import { Field, Form } from '@laboriosi/evalu8-ui-library'
import { Values } from './types'
import { Title, Subtitle, Button } from '~components'
import {
  MOBILE_NUMBER_MASK_BY_COUNTRY_CODE,
  DEFAULT_MOBILE_NUMBER_MASK,
} from '~constants/masks'

export default function Cellphone() {
  const navigate = useNavigate()
  const initialValues = { mobileNumber: '' }
  const validationSchema = object().shape({ mobileNumber: string().required() })

  function getCountryCode(mobileNumber: string) {
    return mobileNumber.slice(0, 3).trim()
  }

  function getMobileNumberMask(countryCode: string): string {
    return (
      (MOBILE_NUMBER_MASK_BY_COUNTRY_CODE[countryCode] as string) ||
      DEFAULT_MOBILE_NUMBER_MASK
    )
  }

  function handleSubmit(values) {
    navigate('')
  }

  return (
    <>
      <Title>Hello welcome!</Title>
      <Subtitle>To continue, we need you to enter your mobile number.</Subtitle>
      <Form<Values>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, values }) => {
          const countryCode = getCountryCode(values.mobileNumber)
          const mask = getMobileNumberMask(countryCode)
          return (
            <>
              <Field mask={mask} name="mobileNumber" label="Mobile number" />
              <Button disabled={!isValid}>Continue</Button>
            </>
          )
        }}
      </Form>
    </>
  )
}
