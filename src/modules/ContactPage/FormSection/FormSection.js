import React from 'react'
import FormSectionTemplate from './FormSectionTemplate'
import InputComponent from './compopnents/InputComponent'
import MessageComponent from './compopnents/MessageComponent'
import TextParagraphComponent from "./compopnents/TextParagraphComponent"
export default function FormSection() {
  return (
    <>
    <FormSectionTemplate
     InputComponent={<InputComponent/>}
    MessageComponent = {<MessageComponent/>}
    TextParagraphComponent ={<TextParagraphComponent/>}
    />
    </>
  )
}
