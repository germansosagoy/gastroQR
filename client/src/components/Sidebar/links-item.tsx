import React from "react";

interface LinksItemProps {
  href: string;
  icon: React.ElementType;
  text: string;
  badge?: {
    text?: string;
    color: string;
    darkColor: string;
  };
}

const LinksItem: React.FC<LinksItemProps> = ({ href, icon: Icon, text, badge }) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Icon className="w-4 h-4 mr-3" />
        <span className="flex-1">{text}</span>
        {badge && (
          <span
            className={`inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium rounded-full ${badge.color} ${badge.darkColor}`}
          >
            {badge.text}
          </span>
        )}
      </a>
    </li>
  );
};

export default LinksItem;
