import { Header } from '@/components/auth/header';
import { BackButton } from '@/components/auth/back-button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Head } from 'react-day-picker';


export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label="Ooops! Something went wrong" />
        </CardHeader>
        <CardFooter>
            <BackButton
             label='Back to Login'
             href="/auth/login"
             />
        </CardFooter>
    </Card>
  )
}
