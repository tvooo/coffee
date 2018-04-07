import Link from "next/link";
import Tabs from "./Tabs";
import colors from "../design/colors.json";

export default ({ active }) => (
  <Tabs>
    <Link href="/">
      <Tabs.Item
        active={active === "basics"}
        style={{ borderColor: colors.indigo[6] }}
      >
        Coffee Basics
      </Tabs.Item>
    </Link>
    <Link href="/equipment">
      <Tabs.Item
        active={active === "equipment"}
        style={{ borderColor: colors.lime[6] }}
      >
        Equipment
      </Tabs.Item>
    </Link>
    <Link href="/recipes">
      <Tabs.Item
        active={active === "recipes"}
        style={{ borderColor: colors.fuschia[6] }}
      >
        Recipes
      </Tabs.Item>
    </Link>
  </Tabs>
);
