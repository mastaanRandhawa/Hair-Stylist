import { memo, useEffect, useState, type ImgHTMLAttributes } from "react";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const SafeImage = memo(function SafeImage({
  src,
  fallback = images.salonChair,
  className,
  alt = "",
  loading = "lazy",
  decoding = "async",
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={cn(className)}
      onError={() => {
        if (imgSrc !== fallback) setImgSrc(fallback);
      }}
    />
  );
});
