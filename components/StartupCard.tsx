import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StartupTypeCard } from "@/sanity/types";
import { Skeleton } from "@/components/ui/skeleton";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _id,
    title,
    _createdAt,
    views,
    description,
    image,
    category,
    author,
  } = post;

  return (
    <li key={_id} className="startup-card group">
      <div className="flex-between">
        <p className="startup-card-date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link
            href={`/user/${author?._id}`}
            className="flex items-center gap-3"
          >
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image ?? "https://placehold.co/48x48"}
            alt={author?.name ?? "author"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image!}
          alt={description!}
          className="startup-card_img"
          width={400}
          height={300}
        />
      </Link>

      <div className="flex-between mt-5 gap-3">
        <Link
          href={`/?query=${category?.toLowerCase()}`}
          className="text-14-medium text-primary"
        >
          {category}
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((i) => (
      <li key={cn("skeleton", i)} className="startup-card group animate-pulse">
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default StartupCard;
