import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import MosqueIcon from '@mui/icons-material/Mosque';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BedIcon from '@mui/icons-material/Bed';
import WorkIcon from '@mui/icons-material/Work';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PrayerIcon from '@mui/icons-material/Mosque';
import WcIcon from '@mui/icons-material/Wc';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FlightIcon from '@mui/icons-material/Flight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShowerIcon from '@mui/icons-material/Shower';

interface Niyyah {
  title: string;
  intention: string;
  quran?: string;
  icon: React.ReactNode;
  color: string;
}

const dailyActions: Niyyah[] = [
  {
    title: 'الأكل',
    intention: 'بسم الله، اللهم بارك لنا فيما رزقتنا وقنا عذاب النار',
    quran: 'وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ (الأعراف: 31)',
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
    color: '#2E7D32', // Dark Green
  },
  {
    title: 'النوم',
    intention: 'باسمك اللهم أموت وأحيا',
    quran: 'وَمِنْ آيَاتِهِ مَنَامُكُم بِاللَّيْلِ وَالنَّهَارِ وَابْتِغَاؤُكُم مِّن فَضْلِهِ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَسْمَعُونَ (الروم: 23)',
    icon: <BedIcon sx={{ fontSize: 40 }} />,
    color: '#1B5E20', // Darker Green
  },
  {
    title: 'العمل',
    intention: 'اللهم إني أعوذ بك من الكسل والهرم، وأعوذ بك من عذاب القبر، وأعوذ بك من فتنة المحيا والممات',
    quran: 'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ (التوبة: 105)',
    icon: <WorkIcon sx={{ fontSize: 40 }} />,
    color: '#2E7D32', // Dark Green
  },
  {
    title: 'الخروج',
    intention: 'بسم الله توكلت على الله ولا حول ولا قوة إلا بالله',
    quran: 'وَإِذَا خَرَجْتَ مِن مَّنزِلِكَ فَأَوْجِبْ عَلَى نَفْسِكَ الصَّبْرَ وَالْحِلْمَ (الإسراء: 37)',
    icon: <ExitToAppIcon sx={{ fontSize: 40 }} />,
    color: '#1B5E20', // Darker Green
  },
  {
    title: 'الصلاة',
    intention: 'اللهم إني نويت أن أصلي صلاة (الفجر/الظهر/العصر/المغرب/العشاء) لله تعالى',
    quran: 'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ (البقرة: 43)',
    icon: <PrayerIcon sx={{ fontSize: 40 }} />,
    color: '#2E7D32', // Dark Green
  },
  {
    title: 'الوضوء',
    intention: 'اللهم اجعلني من التوابين واجعلني من المتطهرين',
    quran: 'إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ (البقرة: 222)',
    icon: <WcIcon sx={{ fontSize: 40 }} />,
    color: '#1B5E20', // Darker Green
  },
  {
    title: 'القرآن',
    intention: 'اللهم اجعل القرآن ربيع قلبي ونور صدري وجلاء حزني وذهاب همي',
    quran: 'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ (الإسراء: 82)',
    icon: <BookIcon sx={{ fontSize: 40 }} />,
    color: '#2E7D32', // Dark Green
  },
  {
    title: 'الدراسة',
    intention: 'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',
    quran: 'وَقُل رَّبِّ زِدْنِي عِلْمًا (طه: 114)',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    color: '#1B5E20', // Darker Green
  },
  {
    title: 'الطبيب',
    intention: 'اللهم اشفني واشف مرضى المسلمين، اللهم أذهب البأس رب الناس واشف أنت الشافي',
    quran: 'وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ (الشعراء: 80)',
    icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
    color: '#2E7D32', // Dark Green
  },
  {
    title: 'السفر',
    intention: 'اللهم أنت الصاحب في السفر والخليفة في الأهل، اللهم إني أعوذ بك من وعثاء السفر وكآبة المنظر وسوء المنقلب في المال والأهل',
    quran: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ (الزخرف: 13)',
    icon: <FlightIcon sx={{ fontSize: 40 }} />,
    color: '#1B5E20', // Darker Green
  },
  {
    title: 'الزواج',
    intention: 'اللهم إني أسألك من خيرها وخير ما جبلتها عليه، وأعوذ بك من شرها وشر ما جبلتها عليه',
    quran: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا (الروم: 21)',
    icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
    color: '#2E7D32', // Dark Green
  },
  {
    title: 'السيارة',
    intention: 'سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون',
    quran: 'وَالْخَيْلَ وَالْبِغَالَ وَالْحَمِيرَ لِتَرْكَبُوهَا وَزِينَةً (النحل: 8)',
    icon: <DirectionsCarIcon sx={{ fontSize: 40 }} />,
    color: '#1B5E20', // Darker Green
  },
  {
    title: 'السوق',
    intention: 'اللهم إني أسألك من خير هذا السوق وخير ما فيه، وأعوذ بك من شر هذا السوق وشر ما فيه',
    quran: 'وَآخَرُونَ يَضْرِبُونَ فِي الْأَرْضِ يَبْتَغُونَ مِن فَضْلِ اللَّهِ (المزمل: 20)',
    icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
    color: '#2E7D32', // Dark Green
  },
  {
    title: 'الاستحمام',
    intention: 'اللهم طهر قلبي من النفاق وعملي من الرياء ولساني من الكذب وعيني من الخيانة',
    quran: 'وَيُنَزِّلُ عَلَيْكُم مِّنَ السَّمَاءِ مَاءً لِّيُطَهِّرَكُم بِهِ (الأنفال: 11)',
    icon: <ShowerIcon sx={{ fontSize: 40 }} />,
    color: '#1B5E20', // Darker Green
  },
];

const Home: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<Niyyah | null>(null);

  const handleOpen = (action: Niyyah) => {
    setSelectedAction(action);
  };

  const handleClose = () => {
    setSelectedAction(null);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <MosqueIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          نوايا المسلم
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          نوايا وأذكار للأفعال اليومية
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {dailyActions.map((action) => (
          <Box key={action.title} sx={{ width: { xs: '100%', sm: '45%', md: '30%' } }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6,
                },
                background: '#FFFFFF',
                border: `1px solid ${action.color}20`,
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}
              onClick={() => handleOpen(action)}
            >
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Box sx={{ color: action.color, mb: 2 }}>{action.icon}</Box>
                <Typography variant="h6" component="h2" sx={{ color: action.color }}>
                  {action.title}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Dialog 
        open={!!selectedAction} 
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 2,
            background: '#FFFFFF',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }
        }}
      >
        {selectedAction && (
          <>
            <DialogTitle sx={{ color: selectedAction.color }}>
              {selectedAction.title}
            </DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ mb: 2 }}>
                <Typography variant="h6" color={selectedAction.color} gutterBottom>
                  النية:
                </Typography>
                {selectedAction.intention}
              </DialogContentText>
              {selectedAction.quran && (
                <DialogContentText>
                  <Typography variant="h6" color={selectedAction.color} gutterBottom>
                    من القرآن الكريم:
                  </Typography>
                  {selectedAction.quran}
                </DialogContentText>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} sx={{ color: selectedAction.color }}>
                إغلاق
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Home; 