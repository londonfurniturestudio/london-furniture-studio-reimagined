import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  telephone?: string
  message?: string
}

const ContactEnquiryEmail = ({ name, email, telephone, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New enquiry from {name || 'a website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New enquiry</Heading>
        <Text style={intro}>A new enquiry has come in from the London Furniture Studio website.</Text>

        <Section style={card}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>

          <Hr style={hr} />

          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>

          <Hr style={hr} />

          <Text style={label}>Telephone</Text>
          <Text style={value}>{telephone || '—'}</Text>

          <Hr style={hr} />

          <Text style={label}>Project details</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{message || '—'}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactEnquiryEmail,
  subject: (data: Record<string, any>) => `New enquiry from ${data.name || 'website visitor'}`,
  displayName: 'Contact enquiry',
  to: 'info@londonfurniturestudio.com',
  previewData: {
    name: 'Jane Smith',
    email: 'jane@example.com',
    telephone: '020 8050 5843',
    message: 'We are looking to commission a bespoke walk-in dressing room for our home in Fulham.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '32px 28px', maxWidth: '600px' }
const h1 = { color: '#1f3a2b', fontSize: '28px', margin: '0 0 12px 0' }
const intro = { color: '#3a3a3a', fontSize: '15px', lineHeight: '22px', margin: '0 0 24px 0' }
const card = { backgroundColor: '#fafaf7', padding: '20px 24px', borderRadius: '4px' }
const label = { color: '#a07a2c', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, margin: '8px 0 4px 0' }
const value = { color: '#1f3a2b', fontSize: '15px', lineHeight: '22px', margin: '0 0 8px 0' }
const hr = { borderColor: '#e6e2d6', margin: '14px 0' }
