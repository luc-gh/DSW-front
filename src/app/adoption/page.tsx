// src/app/page.tsx

import PetProfileDialog from '@/components/PetDialog';
import PetProfile from '@/components/PetProfile';
import { getAnimals } from '@/server/animals';

const AdoptionPage = async () => {
  const data = await getAnimals();
  return (
    <div>
      <div>
        <h3 className='font-bold'>Adoção de Animais</h3>
        <p>Veja a lista de animais disponíveis para adoção.</p>
      </div>
      <div className='max-w-[90%] max-h-[85%] mr-[5%] ml-[5%] grid grid-cols-2 overflow-hidden gap-10 bg-slate-50'>
        {data.map((animal) => (
          <PetProfileDialog key={animal.id.toString()} {...animal}/>
        ))}
      </div>
    </div>
  );
};

export default AdoptionPage


// import PetProfileDialog from '@/components/PetDialog';
// import PetProfile from '@/components/PetProfile';
// import { getAnimals } from '@/server/animals';

// const AdoptionPage = async () => {
//   const data = await getAnimals();
  
//   return (
//     <div className="max-w-[90%] max-h-[85%] mr-[5%] ml-[5%]">
//       <div className="mb-8">
//         <h3 className='font-bold text-2xl'>Sessão de Adoção</h3>
//         <p className='text-gray-700'>Veja a lista de animais disponíveis para adoção.</p>
//       </div>
      
//       <div className='grid grid-cols-2 gap-10 overflow-hidden bg-slate-50 p-5'>
//         {data.map((animal) => (
//           <div key={animal.id.toString()} className="bg-[#FFF4C3] border-2 border-[#4CBEB0] rounded-lg flex justify-between items-center p-5 shadow-md">
//             <img src={animal.imageUrl} alt={animal.name} className="w-[100px] h-[100px] object-cover rounded-lg" />
//             <div className="flex flex-col justify-between items-start flex-1 pl-4">
//               <h3 className="text-lg font-bold mb-2">{animal.name}</h3>
//               <p className="text-sm text-gray-600 mb-4">{animal.description}</p>
//               <div className="flex gap-2">
//                 <button className="bg-[#C9A5F9] text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-[#b48be8]">Detalhes</button>
//                 <button className="bg-[#C9A5F9] text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-[#b48be8]">Adotar</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };