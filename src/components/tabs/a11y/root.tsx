import { Suspense, lazy } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const tabs = [
  {
    label: "Interactive Elements",
    name: "interactive-elements",
    components: lazy(() => import("./contents/interactiveElements")),
  },
  {
    label: "Clickable Elements",
    name: "clickable-elements",
    components: lazy(() => import("./contents/clickableElements")),
  },
] as const;

const A11YTabs = () => {
  return (
    <Tabs defaultValue={tabs[0].name}>
      <TabsList className="grid grid-cols-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.name} value={tab.name}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="py-4">
        {tabs.map((tab) => (
          <TabsContent key={tab.name} value={tab.name}>
            <Suspense>
              <tab.components />
            </Suspense>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default A11YTabs;
