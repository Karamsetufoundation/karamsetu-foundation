import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
export const metadata = {
  title: "Bhoomi | Karamsetu Foundation",
  description: "Connect with us to support educational opportunities.",
};

const Bhoomi = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bhoomi
                </h1>
                <p className="max-w-[600px] text-muted-primary-foreground md:text-xl">
                  Empowering communities through sustainable agriculture,
                  environmental conservation, and community development.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/initiatives"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Involved
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-primary text-primary-foreground px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Donate
                </Link>
              </div>
            </div>
            <AspectRatio ratio={1.2}>
              <Image
                src="/bhoomi-hero.jpeg"
                alt="NewContact"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Empowering Communities, Protecting the Environment
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bhoomi has been working to promote sustainable agriculture,
                environmental conservation, and community development in our
                region for over a decade. Our programs have helped thousands of
                people improve their livelihoods, protect natural resources, and
                build resilient communities.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <AspectRatio ratio={1.4}>
              <Image
                src="/bhoomi-empower.jpeg"
                alt="NewContact"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Sustainable Agriculture
                    </h3>
                    <p className="text-muted-foreground">
                      We provide training, resources, and support to help
                      farmers adopt sustainable farming practices that improve
                      soil health, conserve water, and increase crop yields.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Environmental Conservation
                    </h3>
                    <p className="text-muted-foreground">
                      Our programs focus on protecting and restoring natural
                      habitats, promoting renewable energy, and educating
                      communities on environmental stewardship.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Community Development</h3>
                    <p className="text-muted-foreground">
                      We work with local communities to build infrastructure,
                      provide access to healthcare and education, and create
                      economic opportunities that improve overall well-being.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Programs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Empowering Communities Through Innovative Programs
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bhoomi offers a range of programs designed to promote
                sustainable agriculture, environmental conservation, and
                community development in our region.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Sustainable Agriculture
                    </h3>
                    <p className="text-muted-foreground">
                      Our training programs and resource support help farmers
                      adopt eco-friendly farming practices that improve soil
                      health, conserve water, and increase crop yields.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Environmental Conservation
                    </h3>
                    <p className="text-muted-foreground">
                      We work to protect and restore natural habitats, promote
                      renewable energy, and educate communities on environmental
                      stewardship and sustainable living.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Community Development</h3>
                    <p className="text-muted-foreground">
                      Our community development programs focus on building
                      infrastructure, improving access to healthcare and
                      education, and creating economic opportunities to enhance
                      overall well-being.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <AspectRatio ratio={1.3}>
              <Image
                src="/bhoomi-programs.jpeg"
                alt="NewContact"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Get Involved
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Join Us in Empowering Communities
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                There are many ways you can support Bhoomi and make a difference
                in the lives of people in our community. Whether you choose to
                volunteer, donate, or spread the word, your contribution can
                help us continue our mission of promoting sustainable
                agriculture, environmental conservation, and community
                development.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/initiatives"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Volunteer
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bhoomi;
