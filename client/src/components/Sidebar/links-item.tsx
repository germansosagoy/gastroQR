import React from "react";

interface LinksItemProps {
  href: string;
  icon: React.ElementType;
  text: string;
  badge?: {
    text: string;
    color: string;
    darkColor: string;
  };
}

const LinksItem: React.FC<LinksItemProps> = ({ href, icon: Icon, text, badge }) => {
  return (
    <div>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100"
      >
        <Icon className="mr-3" />
        <span className="flex-1 me-3">{text}</span>
        {badge && (
          <span
            className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${badge.color} ${badge.darkColor}`}
          >
            {badge.text}
          </span>
        )}
      </a>
    </div>
  );
};

export default LinksItem;
