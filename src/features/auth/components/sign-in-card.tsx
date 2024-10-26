import { DottedSeparator } from "@/components/dotted-separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export const SignInCard = () => {
    return ( 
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <div className="px-7 mb-2">
                <DottedSeparator />
            </div>
            <CardContent className="p=7">
                <form className="space-y-4">
                    <Input 
                    required
                    type="email"
                    value={""}
                    onChange={() => {}}
                    placeholder="Enter email address"
                    disabled={false}
                    />
                     <Input 
                    required
                    type="password"
                    value={""}
                    onChange={() => {}}
                    placeholder="Enter password"
                    disabled={false}
                    />
                    <Button disabled={false} size="lg" className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
 
export default SignInCard;