import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen p-5 sm:p-12">
      <div className="flex justify-between w-full">
        <div className="relative w-full max-w-md">
          <Input
            type="email"
            placeholder="Search for a country..."
            className="py-5 pl-12 pr-4 w-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="america">America</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="oceania">Oceania</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
