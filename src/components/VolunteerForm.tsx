import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo.webp";

export default function VolunteerForm() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-4xl p-6 rounded-xl shadow-md">
        <form className="w-full">
          <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl text-primary">
                Volunteer Form
              </CardTitle>
              <CardDescription className="mt-1">
                Join our initiative and be a part of the change.
              </CardDescription>
            </div>
            <img
              src={logo}
              alt="Basti Ki Pathshala"
              className="size-14 bg-white rounded-full shadow"
            />
          </CardHeader>

          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Your full name" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="1234567890" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" min="12" max="100" placeholder="e.g. 18" required />
            </div>

            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="role">Preferred Volunteering Role</Label>
              <Input id="role" type="text" placeholder="e.g. Teaching, Event Help..." />
            </div>

            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="availability">Availability (Days)</Label>
              <Input id="availability" type="text" placeholder="e.g. Weekends, Mon-Fri evenings..." />
            </div>

            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="motivation">Why do you want to volunteer?</Label>
              <Textarea
                id="motivation"
                placeholder="Briefly tell us your motivation..."
                rows={4}
              />
            </div>
          </CardContent>

          <CardFooter className="flex justify-end mt-6">
            <Button type="submit" className="w-full md:w-40">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}