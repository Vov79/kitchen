import About from '@//components/About';
import Featured from '@//components/Featured';
import Form from '@//components/Form';
import placeholder from "@images/Img-15.jpg"
import Image from "next/image";
import { db } from "@//lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getKitchensData } from '@//actions/get_kitchen'; 
import type { Kitchen } from '@//types/Kitchen';
import ImageSlider from '@//components/ImageSlider';
import { useRouter } from 'next/navigation';

export default async function Preview({ params }: { params: { title: string } }) {
 
    const kitchen: Kitchen | null = await getKitchensData(params.title);
    
    return (  
      
        <div>

          <div className="preview__head">
            <h1 className="preview__head-title">{kitchen?.title}</h1>
            <Form
              kitchenImage={kitchen?.imageUrls[0]}
              kitchenId={kitchen?.title}
              withKitchen
              buttonClassName="preview-form"
            >
              COMANDĂ APEL
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.96949 8.34296C10.2624 8.05007 10.7373 8.05007 11.0301 8.34296L15.0301 12.343C15.323 12.6359 15.323 13.1107 15.0301 13.4036L11.0301 17.4036C10.7373 17.6965 10.2624 17.6965 9.96949 17.4036C9.67659 17.1107 9.67659 16.6359 9.96949 16.343L13.4392 12.8733L9.96949 9.40362C9.67659 9.11073 9.67659 8.63585 9.96949 8.34296Z"
                  fill="white"
                />
              </svg>
            </Form>
          </div>
          <div className="app preview">
          <ImageSlider></ImageSlider>
            <div className="preview__images">
              {kitchen?.imageUrls.map((url, index) => (
                <div
                  className={`preview__images-item item_${index + 1}`}
                  key={index}
                >
                  <Image
                    className="preview__images-image"
                    src={url || placeholder}
                    alt={kitchen.title}
                    width={1400}
                    height={500}
                  />
                </div>
              ))}
            </div>
            <div className="preview__main">
              
            </div>
            <div className="preview__info">
              <div className="preview__info-content">
                <h3 className="preview__info-title">DESCRIERE</h3>
                <p className="preview__info-description">{kitchen?.description}</p>
              </div>
              <div className="preview__info-content">
                <h3 className="preview__info-title">SPECIFICAȚII</h3>
                <div className="preview__info-container">
                  <div className="preview__info-item">
                    <h3 className="preview__info-label">FAȚADE</h3>
                    <p className="preview__info-body">{kitchen?.facades}</p>
                  </div>
                  <div className="preview__info-item">
                    <h3 className="preview__info-label">BLAT</h3>
                    <p className="preview__info-body">{kitchen?.blat}</p>
                  </div>
                  <div className="preview__info-item">
                    <h3 className="preview__info-label">PRODUCATOR</h3>
                    <p className="preview__info-body">{kitchen?.producer}</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{width: 100 + '%'}}>
              <Featured />
              <About />
            </div>
          </div>
        </div>
      );
    }
