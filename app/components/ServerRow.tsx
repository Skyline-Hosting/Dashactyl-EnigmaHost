import { BsPlugFill } from 'react-icons/bs';
import { RemoteServer } from '~/models/remote.server';

export default function ServerRow({ id, name, status }: RemoteServer) {
  const getColor = () => {
    switch (status) {
      case 'suspended':
        return 'text-red-600';
      case 'transferring':
        return 'text-red-400';
      default:
        return 'text-white';
    }
  };

  return (
    <li
      className="my-3 mr-1 max-w-md rounded-md bg-slate-800 text-white"
      key={id}
    >
      <div className="flex p-3 text-xl font-medium text-white">
        <BsPlugFill className={`mt-1 mr-3 ${getColor()}`} />
        {name}
      </div>
    </li>
  );
}