import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.webp";

export default function VolunteerForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Volunteer Form</CardTitle>
        <CardDescription>
          Join our initiative and be part of change.
        </CardDescription>
        <CardAction>
          <img
            src={logo}
            alt="Basti Ki Pathshala"
            className="size-10 bg-gray-100 rounded-full"
          />
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="1234567890" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                min="12"
                max="100"
                placeholder="e.g. 18"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="role">Preferred Volunteering Role</Label>
              <Input
                id="role"
                type="text"
                placeholder="e.g. Teaching, Event Help..."
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="availability">Availability (Days)</Label>
              <Input
                id="availability"
                type="text"
                placeholder="e.g. Weekends, Mon-Fri evenings..."
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="motivation">Why do you want to volunteer?</Label>
              <textarea
                id="motivation"
                placeholder="Briefly tell us your motivation..."
                rows={3}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" variant={"CTA"} className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
