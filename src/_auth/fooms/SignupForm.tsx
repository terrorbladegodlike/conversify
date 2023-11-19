'use client'

// Import Button froom UI 
import { Button } from "@/components/ui/button"

// Import Use From from React-Hook-Form
import { useForm } from "react-hook-form"

// Import Components
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Import Input Component
import { Input } from "@/components/ui/input"

// Import Zod Resolver
import { zodResolver } from "@hookform/resolvers/zod"

// Import Validation
import { signupValidation } from "@/lib/validation"

// Import Z from ZOD
import { z } from 'zod'

// Import Loader
import Loader from "@/components/shared/Loader"

// Import Link from React-Router-DOM
import { Link } from "react-router-dom"

// Import API
import { createUserAccount } from "@/lib/appwrite/api"

const SignupForm = () => {

  const isLoading = false

  // 1. Define your form.
  const form = useForm<z.infer<typeof signupValidation>>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signupValidation>) {
    // Create The User
    const newUser = await createUserAccount(values)

    console.log(newUser);

  }

  return (
    <Form {...form}>

      <div className="sm:w-420 flex-center flex-col">

        <div className="text-3xl uppercase font-bold">
          Conversify
        </div>

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a new account
        </h2>

        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use <span className="text-[#FF0000]">Conversify</span>, please enter your account details
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
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
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="shad-button_primary" type="submit">
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ) : (
              "Sign up"
            )}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link to='/sign-in' className="text-primary-500 text-small-semibold ml-1">Log in</Link>
          </p>
        </form>

      </div>
    </Form>
  )
}

export default SignupForm