import { formatDate, StartupTypeCard } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    id,
    title,
    _createdAt,
    views,
    description,
    image,
    category,
    author: { id: authorId, name: authorName },
  } = post;

  return (
    <li key={id} className="startup-card group">
      <div className="flex-between">
        <p className="startup-card-date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`} className="flex items-center gap-3">
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image}
          alt={title}
          className="startup-card_img"
          width={400}
          height={300}
        />
      </Link>

      <div className="flex-between mt-5 gap-3">
        <Link
          href={`/?query=${category.toLowerCase()}`}
          className="text-14-medium text-primary"
        >
          {category}
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
