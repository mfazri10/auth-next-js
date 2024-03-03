"use client";

import  {z} from "zod";
import { useState, useTransition } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { CardWrapper } from "@/components/auth/card-wrapper";
import {  useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";
import Link from "next/link";

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email Already in use with different provider!" : "";
    const [error, setError] = useState<string | undefined>("");
    const [success, setsuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();

    const form = useForm < z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setsuccess("");
        startTransition(()=> {
            login(values)
            .then((data) => {
                setError(data?.error);
                // TODO: Add a 2fa
                //setsuccess(data?.success);
            })
        });
    };

    return (
        <CardWrapper 
            headerLabel="Welcome Back"
            backButtonLabel="Dont have an account?"
            backButtonHref="/auth/register"
            showSocial
        >

            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                <div className="space-y-4">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input 
                                {...field}
                                disabled={isPending}
                                placeholder="john.doe@example.com"
                                type="email" />
                            </FormControl>
                            <FormMessage/>
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
                                <Input 
                                {...field}
                                disabled={isPending}
                                placeholder="*******"
                                type="password"
                                />
                            </FormControl>
                            <Button
                            size="sm"
                            variant="link"
                            asChild
                            className="px-0 font-normal"
                            >
                                <Link href="/auth/reset">
                                    Lupa Password?
                                </Link>
                            </Button>
                            <FormMessage/>
                        </FormItem>
                    )}
                    
                    />
                </div>
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <Button
                type="submit"
                className="w-full"
                disabled={isPending}
                >
                    Login
                </Button>

                </form>

            </Form>
        </CardWrapper>
    )
}