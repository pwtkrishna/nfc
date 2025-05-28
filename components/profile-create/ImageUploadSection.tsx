import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import Button from "../Button";
import { Label } from "../ui/label";

type ImageUploadSectionProps = {
  label: string;
  value: File | string | null; // Accepts File, object URL, or remote URL
  onChange: (file: File, previewUrl: string) => void;
  placeholderIcon?: React.ReactNode;
  width?: number;
  height?: number;
  rounded?: boolean;
};

export default function ImageUploadSection({
  label,
  value,
  onChange,
  placeholderIcon,
  width = 80,
  height = 80,
  rounded = true,
}: ImageUploadSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Generate preview when value changes
  useEffect(() => {
    if (value instanceof File) {
      const objectUrl = URL.createObjectURL(value);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else if (typeof value === "string" && value) {
      setPreviewUrl(value);
    } else {
      setPreviewUrl(null);
    }
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    onChange(file, objectUrl);
  };

  return (
    <div className="space-y-2">
      <Label className="text-white mb-2 inline-block">{label}</Label>
      <div className={`flex items-center space-x-4 w-full`}>
        <div
          className={`bg-[#1f2128] border-2 border-gray-700 flex items-center justify-center overflow-hidden
            ${rounded ? "rounded-full" : "rounded-lg"}
            w-full`}
          style={{ width, height }}
        >
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt={label}
              width={width}
              height={height}
              className={`object-cover ${rounded ? "rounded-full" : "rounded"}`}
              unoptimized
            />
          ) : (
            placeholderIcon || <Upload className="h-8 w-8 text-gray-400" />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <Button
          variant="outline"
          className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white flex items-center px-4 py-2 hover:cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          type="button"
        >
          <Upload className="mr-2 h-4 w-4" />
          Upload Photo
        </Button>
      </div>
    </div>
  );
}
