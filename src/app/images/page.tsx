import Image from 'next/image';

import cloudinary from '@/utils/cloudinary';

export interface ImageProps {
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
}

type Props = {
  images: any;
};


export default async function Page({ images  }: Props) {
  return (
    <div className="container flex flex-wrap mx-auto">
      <div className="w-full p-2 rounded lg:w-1/3">
        <Image src="/images/galaxy1.jpg" width={720} height={480} alt="Universe Picture" />
      </div>
      <div className="w-full p-2 rounded lg:w-1/3">
        <Image src="/images/galaxy2.jpg" width={720} height={480} alt="Universe Picture" />
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const results = await cloudinary.v2.search
//   .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
//   .sort_by('public_id', 'desc')
//   .max_results(400)
//   .execute()

//   let reducedResults: ImageProps[] = []

//   let i = 0
//   for (let result of results.resources) {
    
    
//     reducedResults.push({
//       id: i,
//       height: result.height,
//       width: result.width,
//       public_id: result.public_id,
//       format: result.format,
//     })
//     i++
//   }

//   // const blurImagePromises = results.resources.map((image: ImageProps) => {
//   //   return getBase64ImageUrl(image)
//   // })
//   // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

//   // for (let i = 0; i < reducedResults.length; i++) {
//   //   reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
//   // }

//   return {
//     props: {
//       images: reducedResults,
//     },
//   }
// }
