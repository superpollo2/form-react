import { useSession } from "next-auth/react";
import { SingIn } from "./ui/SingIn/SingIng";
import { ProtectedComponent } from "./ProtectedComponent";


interface SingInProps {
  children: React.ReactNode;
}
const PrivateRoute = ({ children }: SingInProps) => {
  const { status } = useSession();

  return (
    <div className=" w-screen  overflow-hidden">
      {status === "authenticated" ? (
        <div className="flex items-center justify-center w-full h-full bg-[#ffedff]">
            {children}      
        </div>
      ) : (
        <>
          <SingIn />
        </>
      )}
    </div>
  );
};

export { PrivateRoute }