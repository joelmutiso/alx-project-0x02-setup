import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-1">{name}</h2>
      <p className="text-blue-600 text-sm mb-4 font-medium">{email}</p>
      
      <div className="pt-4 border-t border-gray-50 text-gray-600 text-sm">
        <p className="font-semibold text-gray-400 uppercase text-[10px] tracking-wider mb-1">Address</p>
        <p>{address.street}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;