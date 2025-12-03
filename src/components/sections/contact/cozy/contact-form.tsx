'use client'

import { useAction } from 'next-safe-action/hooks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { TurnstileModal } from '@/components/sections/contact/_components/turnstile-modal'
import { LoaderCircleIcon } from 'lucide-react'
import { contactSubmit } from '@/app/actions'
import { FormError } from '@/components/sections/contact/_components/form-error'
import { FormSuccess } from '@/components/sections/contact/_components/form-success'
import {
  ContactForm as ContactFormType,
  ContactFormSchema
} from '@/lib/validators'
import { useState, useRef } from 'react'
import { toast } from 'sonner'
import { Keyboard } from '../_components/keyboard'

export default function ContactForm() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const { execute, result, status } = useAction(contactSubmit)
  const [isOpen, setIsOpen] = useState(false)
  const activeInputRef = useRef<'name' | 'email' | 'message' | null>(null)

  async function onSubmit() {
    setIsOpen(true)
  }

  async function onVerify(token?: string) {
    setIsOpen(false)
    if (!token) {
      toast.error(
        'Captcha validation failed. Please ensure the captcha is completed.',
        {
          position: 'bottom-center'
        }
      )
      return
    }
    execute({ ...form.getValues(), token })
  }

  const handleKeyPress = (key: string) => {
    if (!activeInputRef.current) return

    form.setValue(activeInputRef.current, form.getValues(activeInputRef.current) + key, { shouldValidate: true })
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tan Phat"
                    disabled={status === 'executing'}
                    {...field}
                    onFocus={() => activeInputRef.current = 'name'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nguyenvantanphat.it@gmail.com"
                    disabled={status === 'executing'}
                    {...field}
                    onFocus={() => activeInputRef.current = 'email'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={status === 'executing'}
                    placeholder={
                      'Hello!\n\n'
                    }
                    {...field}
                    onFocus={() => activeInputRef.current = 'message'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <section className='hidden md:block'>
            <Keyboard onKeyPress={handleKeyPress} />
          </section> */}
          <FormError message={result.serverError} />
          <FormSuccess message={result.data?.success} />

          <Button
            disabled={status === 'executing'}
            type="submit"
            className={'w-full'}
          >
            {status === 'executing' && (
              <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
          </Button>
        </form>
      </Form>
      <TurnstileModal open={isOpen} callback={onVerify} />
    </div>
  )
}