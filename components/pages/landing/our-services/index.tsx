import { FC, ReactElement } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
export const ServicesModule: FC = (): ReactElement => {
  const data = [
    {
      title: "Platform as a Services",
      description:
        "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis similique. Illo eveniet, inventore laboriosam hic iure laborum cupiditate quidem beatae quia, voluptatibus minus totam deserunt officia distinctio enim aut.",
      image: "/serv1.png",
    },
    {
      title: "Laptop Services",
      description:
        "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis similique. Illo eveniet, inventore laboriosam hic iure laborum cupiditate quidem beatae quia, voluptatibus minus totam deserunt officia distinctio enim aut.",
      image: "/serv2.png",
    },
    {
      title: "Other Services",
      description:
        "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis similique. Illo eveniet, inventore laboriosam hic iure laborum cupiditate quidem beatae quia, voluptatibus minus totam deserunt officia distinctio enim aut.",
      image: "/serv3.jpg",
    },
  ];

  return (
    <div className="container space-y-6 my-16">
      <h1 className="text-slate-500 text-center text-5xl font-bold">
        Product & Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((item, index) => (
          <Card className="my-3 scale-90 p-0 hover:-translate-y-1 duration-200 ease-in " key={index}>
            <CardContent className="p-0">
              <Image
                width={300}
                height={300}
                src={item.image}
                alt={item.title}
                className="w-full object-center object-cover rounded-t-md"
              />
            </CardContent>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="line-clamp-3">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="place-content-end">
              <Link
                href={"#"}
                className={buttonVariants({ variant: "outline" })}
              >
                Read more <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
