import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Home, User, Settings, ChevronDown, ChevronRight } from "lucide-react";

const Sidebar = ({ menuItems, activeTab }) => {
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="h-screen w-64 p-4">
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <div key={index} className="">
            {item.submenu ? (
              <Collapsible>
                <CollapsibleTrigger
                  onClick={() => toggleSubmenu(item.name)}
                  className="custom-nav"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {submenuOpen[item.name] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="pl-6 ">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        className={`custom-nav ${
                          activeTab === subItem.name ? "active" : ""
                        }`}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <a
                href={item.path}
                className={`custom-nav ${
                  activeTab === item.name ? "active" : ""
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
