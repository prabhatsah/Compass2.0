import React, { Suspense, lazy } from "react";

// Map library keys to submodule paths
const libraryMap = {
  fa: "react-icons/fa",
  md: "react-icons/md",
  bs: "react-icons/bs",
  bi: "react-icons/bi",
  // Add other libraries as needed
};

const loadIcon = (library, iconName) => {
  const modulePath = libraryMap[library];
  if (!modulePath) {
    throw new Error(`Library ${library} is not supported.`);
  }

  return lazy(() =>
    import(modulePath).then((module) => {
      const Icon = module[iconName];
      if (!Icon) {
        throw new Error(`Icon ${iconName} not found in library ${library}`);
      }
      return { default: Icon };
    })
  );
};

export default function ButtonWithIcon({
  library,
  iconName,
  text,
  bgColor,
  clickFunction,
  textColor,
}) {
  const IconComponent = loadIcon(library, iconName);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <a
        href="#"
        onClick={clickFunction}
        className={`hover:opacity-90 px-5 py-2 rounded-md ${bgColor} ${textColor} flex items-center gap-2`}
      >
        {IconComponent ? <IconComponent /> : <div>Icon not found</div>}
        {text}
      </a>
    </Suspense>
  );
}
