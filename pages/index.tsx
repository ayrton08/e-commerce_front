import { ProductFeatured } from "components/ProductFeatured";
import Head from "next/head";
import { Header, Banner, Featured, Categories, Menu } from "ui";
import { Category } from "ui/Category";
import { ComputerIcon } from "ui/icons";

import { useProducts } from "hooks/useData";

export default function Home() {
  const data = useProducts();
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="p-4 mb-10 flex flex-col gap-10 items-center">
        <Header />
        <Menu />
      </div>

      <Banner />
      <Featured>
        {data?.results?.map((data: any) => (
          <ProductFeatured
            key={data.Name}
            title={data.Name}
            price={data["Unit cost"]}
            picture={data.Images[0].url}
          />
        ))}
      </Featured>
      <div className="divider px-8"></div>
      <Categories>
        <Category label="Tecnology" icon={<ComputerIcon />} />
        <Category label="Wrraper" icon={<ComputerIcon />} />
        <Category label="Bazar" icon={<ComputerIcon />} />
        <Category label="Sport" icon={<ComputerIcon />} />
      </Categories>
    </div>
  );
}
