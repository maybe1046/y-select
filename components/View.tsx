import Ping from "@/components/Ping";
import { formatViews } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_BY_ID_QUERY } from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
  const { views: totoalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_BY_ID_QUERY, {
      id,
    });
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{formatViews(totoalViews)}</span>
      </p>
    </div>
  );
};

export default View;
