interface InfoListProps {
  title: string;
  icon: React.ElementType;
  iconClass: string;
  items: string[];
}

const InfoList: React.FC<InfoListProps> = ({ title, icon: Icon, iconClass, items }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-white flex items-center gap-2">
      <Icon className={iconClass + " h-5 w-5"} />
      {title}
    </h3>
    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
      {items.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </div>
);

export default InfoList; 