import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import google from "@/assets/google.svg"
import apple from "@/assets/apple.svg"
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-3xl md:text-5xl">Welcome back!</h1>
          <p className="text-base text-balance text-muted-foreground">
            Your work. your team. your flow — all in one place.
          </p>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-between gap-2">
          <Button
            variant="outline"
            type="button"
            size="lg"
            className="flex gap-2 rounded-full md:px-8 md:py-6"
          >
            <img src={google} alt="Google" className="size-4 text-foreground"/>
            Sign in with Google
          </Button>
          <Button
            variant="outline"
            type="button"
            size="lg"
            className="flex gap-2 rounded-full md:px-8 md:py-6"
          >
            <img src={apple} alt="apple" className="size-4 text-foreground" />
            Sign in with Apple
          </Button>
        </div>
        <FieldSeparator className="my-1">Or</FieldSeparator>
        <Field>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="rounded-2xl bg-background md:px-4 md:py-6"
          />
        </Field>

        <Field>
          <Button className="rounded-full md:px-8 md:py-6" type="submit">
            Sign wiht email
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
