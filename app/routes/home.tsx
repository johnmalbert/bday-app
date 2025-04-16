import { useState } from 'react';
import { motion } from "framer-motion";
import Confetti from 'react-confetti';

const photos = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
];

export default function BirthdayPage() {
  const [photoIndex, setPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setPhotoIndex((photoIndex + 1) % photos.length);
  };

  return (
    <div> 
    <div style={{ minHeight: '100vh', backgroundColor: '#ffe4e6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      {typeof window !== 'undefined' && (
        <Confetti width={window.innerWidth} height={window.innerHeight} recycle={true} />
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', color: '#be123c', marginBottom: '1.5rem', fontFamily: 'cursive', maxWidth: '90%' }}
      >
        For 364 days, Laura cares for you. But for just one day, will you care for Laura?
      </motion.h1>

      <audio autoPlay loop>
        <source src="/images/a-birthday-to-remember-201324.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div style={{ maxWidth: '700px', backgroundColor: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', borderRadius: '1rem', padding: '1.5rem' }}>
        <div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#374151' }}
          >
            <p style={{ marginBottom: '1rem' }}>
              
  Laura isn’t just a sister—she’s the glue between generations, the steady middle of nine Albert kids, quietly excelling while the rest of us scramble to keep up. In a family that thrives on chaos and character, she’s the one who brings the calm and the craft. With a patient eye and hands that turn ordinary clay into wearable art, Laura creates jewelry that feels personal, intentional, and undeniably stylish. Her Etsy shop is less about trends and more about soul—each piece a reflection of her thoughtful creativity and care. She's also the second-best gift giving aunt in the family.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              And let’s not forget, while the rest of the Albert siblings were mastering the art of napping and excuses, Laura was out pounding pavement, conquering 26.2 miles of marathon magic, her sweat glistening like diamonds forged in the fire of unmatched determination. That’s right—she didn’t just run a race, she obliterated the idea that any other Albert could even hope to keep up.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Her talents don’t end there—oh no. Laura can draw. And not just doodles or cartoons, but breathtaking sketches that look like they were plucked straight out of a Renaissance museum and kissed by a modern muse. She glances at a blank page and, with the flick of a pencil, births a masterpiece that leaves onlookers breathless and, quite frankly, a little jealous.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              And how could we possibly forget the man who dared to stand beside this whirlwind of wonder? Israel—her Brazilian husband, her airplane-fixing prince. A man who literally makes flying machines work while being lucky enough to orbit the radiant star that is Laura. While he’s out there stress-testing bolts and whispering to jet engines, she’s raising the next generation of thinkers and doers (and fighters). Together, they are the ultimate power couple: grounded in love, but always soaring high.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Then there’s her style. Despite eating out 8 times a week, Laura still looks better than you. Laura doesn’t follow fashion trends—she invents them. With an eye sharper than your best camera lens and a closet that rivals Pinterest’s wildest dreams, she floats through life draped in elegance, effortlessness, and a touch of whimsy that only she can pull off. Every outfit is a statement. And that statement is: "I’m Laura, and you wish you were this fabulous."
            </p>
            <p style={{ marginBottom: '1rem' }}>
              So today isn’t just her birthday—it’s a global holiday of fabulousness. A day when we all pause to gaze skyward, throw glitter in the air, and say: “Thank you, God, for blessing us with this artistic, athletic, stylish goddess of a human.” Happy Birthday, Laura. May your clay never crack, your running shoes stay springy, and your reign as the Queen of the Albert clan continue for many years to come.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem' }}>
            <motion.img 
              key={photoIndex}
              src={photos[photoIndex]} 
              alt="Laura" 
              style={{ borderRadius: '1rem', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', width: '100%', maxWidth: '400px', transition: 'all 0.5s ease' }} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              />
            <button 
              onClick={nextPhoto} 
              style={{ marginTop: '1rem', padding: '0.5rem 1.25rem', backgroundColor: '#e11d48', color: 'white', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#be123c'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#e11d48'}
            >
              Next Photo
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}