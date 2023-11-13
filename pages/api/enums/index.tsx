import { Enum_TypePet, Enum_Gender } from '@prisma/client';



export default (req, res) => {
  res.status(200).json({
    petTypes: Object.values(Enum_TypePet),
    genders: Object.values(Enum_Gender),
  });
};