import Link from "next/link";
import Tabs from "./Tabs";
import MenuList from "./MenuList";
import colors from "../design/colors.json";

export default ({ active }) => (
  <Tabs>
    <Link href="/">
      <Tabs.Item active={active === "basics"} color={colors.indigo[6]}>
        Coffee Basics
      </Tabs.Item>
    </Link>
    <Link href="/equipment">
      <Tabs.Item active={active === "equipment"} color={colors.lime[6]}>
        Equipment
      </Tabs.Item>
    </Link>
    <Link href="/recipes">
      <Tabs.Item active={active === "recipes"} color={colors.fuschia[6]}>
        Recipes
      </Tabs.Item>
    </Link>
  </Tabs>
);
