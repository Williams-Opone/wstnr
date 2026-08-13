import { getPrismaClient } from "@/lib/prisma";
import CommunityFooter from "@/components/CommunityFooter";

export const dynamic = "force-dynamic";

export default async function CommunityFooterSection() {
  const client = getPrismaClient();

  let ugcImages: any[] = [];

  // Try to fetch from a "CommunityPost" table using raw SQL – safe if table doesn't exist
  try {
    const result = await client.$queryRaw<any[]>`
      SELECT id, "imageUrl", username, likes, "instagramUrl"
      FROM "CommunityPost"
      ORDER BY "createdAt" DESC
      LIMIT 5
    `;
    ugcImages = result.map((post: any) => ({
      id: post.id,
      src: post.imageUrl,
      username: post.username,
      likes: post.likes,
      instagramUrl: post.instagramUrl,
    }));
  } catch (e) {
    // Table doesn't exist – use fallback images below
    ugcImages = [];
  }

  // If no posts in DB, use realistic sample community photos
  if (ugcImages.length === 0) {
    ugcImages = [
      {
        id: "s1",
        src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
        username: "@concrete_king",
        likes: 124,
        instagramUrl: "https://instagram.com",
      },
      {
        id: "s2",
        src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
        username: "@brutal.style",
        likes: 89,
        instagramUrl: "https://instagram.com",
       },
      {
        id: "s3",
        src: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&q=80",
        username: "@urban.wardrobe",
        likes: 210,
        instagramUrl: "https://instagram.com",
      },
      {
        id: "s4",
        src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
        username: "@wstnr.witness",
        likes: 340,
        instagramUrl: "https://instagram.com",
      },
      {
        id: "s5",
        src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        username: "@rebar.ritual",
        likes: 56,
        instagramUrl: "https://instagram.com",
      },
    ];
  }

  return <CommunityFooter communityImages={ugcImages} />;
}