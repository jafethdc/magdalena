import Link from "next/link";
import { Grid, Box } from "@radix-ui/themes";

const Header: React.FC = () => {
  return (
    <Box as="div" className="bg-orange-200 text-black p-4 shadow">
      <Grid className="mx-auto max-w-7xl grid-cols-[1fr,auto]">
        <Link href="/" className="font-bold text-xl">
          QLQ
        </Link>
        <nav>
          <Grid className="grid-cols-[repeat(2,max-content)]">
            <Link href="/sample-page">Sample Page</Link>
          </Grid>
        </nav>
      </Grid>
    </Box>
  );
};

export default Header;
