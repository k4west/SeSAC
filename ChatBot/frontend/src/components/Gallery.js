const Gallery = () => {
  const imageUrls = [
    "https://github.com/k4west/SeSAC/assets/125423305/27b860c7-b455-45bd-bfd9-37fc56e73eb3",
    "https://github.com/k4west/SeSAC/assets/125423305/3bfef3ac-0900-45a3-84c8-7569a71f0672",
    "https://github.com/k4west/SeSAC/assets/125423305/a69224a4-1fa6-4986-b3f5-f93564422dc8",
    "https://github.com/k4west/SeSAC/assets/125423305/add97eba-18aa-402b-a090-430038f372a2",
    "https://github.com/k4west/SeSAC/assets/125423305/1862e393-4952-479c-8bf8-cfcc30e99df2",
    "https://github.com/k4west/SeSAC/assets/125423305/7c2942b0-f738-4b3c-87c9-3a0bac9d0c0f",
    "https://github.com/k4west/SeSAC/assets/125423305/24f71fbc-2730-4a3c-b4a5-b1d0a297b79e",
    "https://github.com/k4west/SeSAC/assets/125423305/eb9de1ea-37c3-44dd-8f31-3d4ff67c0f7a",
    "https://github.com/k4west/SeSAC/assets/125423305/4aca945c-dc0f-4b55-8f02-2de8e00cbd0f",
    "https://github.com/k4west/SeSAC/assets/125423305/92effa90-f7d7-43f4-93f5-828cafe29078",
    "https://github.com/k4west/SeSAC/assets/125423305/1c566626-c83c-4d62-af21-1a376ee1a2d9",
    "https://github.com/k4west/SeSAC/assets/125423305/030205de-67b8-473b-a148-c4274a029912",
    "https://github.com/k4west/SeSAC/assets/125423305/6591c57a-6c88-4fac-99a5-c7b7abd8849d",
    "https://github.com/k4west/SeSAC/assets/125423305/6a843a95-b863-4811-80f9-9325b0c574f4",
    "https://github.com/k4west/SeSAC/assets/125423305/fe65f843-9175-4a16-88a9-4e3930a34b38",
    "https://github.com/k4west/SeSAC/assets/125423305/916ec2ee-5d49-40a0-88e6-6ca27376dd08",
    "https://github.com/k4west/SeSAC/assets/125423305/23724243-6f86-40df-a771-980f27e82155",
    "https://github.com/k4west/SeSAC/assets/125423305/57d3cd84-b8cd-4834-822e-da1d3609b3fb",
    "https://github.com/k4west/SeSAC/assets/125423305/8748c017-d68b-41d4-abca-55f0cd774fb9",
    "https://github.com/k4west/SeSAC/assets/125423305/82c19fd6-6051-4b55-a557-1f5a2880f3e2",
    "https://github.com/k4west/SeSAC/assets/125423305/63700447-25ce-483b-9efc-e68a9e68f8cb",
    "https://github.com/k4west/SeSAC/assets/125423305/c307c212-3da8-41c8-8f95-79b11ec050ad",
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
  ];

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4">Gallery</h1>
      <div className="text-center my-4 border border-black flex flex-wrap justify-center w-2/3 m-auto">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Gallery Item ${index + 1}`}
            className="w-48 m-2 transition-transform duration-300 hover:scale-150"
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
