import { Grid } from "@radix-ui/themes";

const Footer: React.FC = () => {
  return (
    <Grid as="div" className="bg-white text-orange-400 p-4 text-center shadow-lg">
      <div className="mx-auto max-w-7xl">
        &copy; QLQ App
      </div>
    </Grid>
  );
};

export default Footer;
