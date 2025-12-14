import { useState, useMemo } from 'react';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

type MediaItem = {
  path: string;
  name: string;
};

// List of all media items (images only)
const allMedia: MediaItem[] = [
  { path: 'media/safety-ppe/6D7CD4A9-1B75-4318-AE31-D161FB3618E0_1_105_c.jpeg', name: 'Safety & PPE - Product Image 1' },
  { path: 'media/safety-ppe/85109356-4F73-4539-889B-6762D7A0E40D_1_105_c.jpeg', name: 'Safety & PPE - Product Image 2' },
  { path: 'media/safety-ppe/BE547947-D814-4C8F-A367-EE86075919F3_1_105_c.jpeg', name: 'Safety & PPE - Product Image 3' },
  { path: 'media/safety-ppe/CB1821EB-4D28-40DB-A31B-B16C81FF4C30_1_105_c.jpeg', name: 'Safety & PPE - Product Image 4' },
  { path: 'media/safety-ppe/EEF57B9A-0AC3-4DCC-90F7-E2C9712E3D14_1_105_c.jpeg', name: 'Safety & PPE - Product Image 5' },
  { path: 'media/lashing-equipment/PHOTO-2025-12-03-22-46-57.jpg', name: 'Lashing Equipment - Photo 2025 12 03 22 46 57' },
  { path: 'media/lashing-equipment/31473002-7EC8-4BEE-B634-AFD152C78649_1_105_c.jpeg', name: 'Lashing Equipment - Product Image 1' },
  { path: 'media/lashing-equipment/9AC3D020-3F5B-4CEC-8AF6-E1E0C337B18A_1_105_c.jpeg', name: 'Lashing Equipment - Product Image 2' },
  { path: 'media/shackle/PHOTO-2025-12-12-22-51-24.jpg', name: 'Shackle - Photo 2025 12 12 22 51 24' },
  { path: 'media/slings/PHOTO-2025-12-12-23-01-16.jpg', name: 'Slings - Photo 2025 12 12 23 01 16' },
  { path: 'media/timber/PHOTO-2025-12-12-23-03-15.jpg', name: 'Timber Equipment - Photo 2025 12 12 23 03 15' },
  { path: 'media/wire_rope.jpg', name: 'Wire Rope' },
  { path: 'media/096A487E-B56A-464A-9123-391D252DA309_1_105_c.jpeg', name: 'Product Image 1' },
  { path: 'media/0A05B269-F00E-4747-926F-957A51CEF144_1_105_c.jpeg', name: 'Product Image 2' },
  { path: 'media/0B6BB200-3152-4CF4-A1E8-381759317C01_1_105_c.jpeg', name: 'Product Image 3' },
  { path: 'media/0BC85B8E-01CB-4061-9426-CC057FD93FF3_1_105_c.jpeg', name: 'Product Image 4' },
  { path: 'media/0C8A7002-C396-420A-A4A6-E6A4CEFAD9D8_1_105_c.jpeg', name: 'Product Image 5' },
  { path: 'media/0FF0242F-70EB-48ED-BF18-39FE4D23ACFC_1_105_c.jpeg', name: 'Product Image 6' },
  { path: 'media/139EBBA2-1D8A-4F3B-A22A-5F37EDFF16D1_1_105_c.jpeg', name: 'Product Image 7' },
  { path: 'media/1481AF9F-29C2-4CBF-A7C2-1915B69708E4_1_105_c.jpeg', name: 'Product Image 8' },
  { path: 'media/173C5FE1-326D-471B-92B7-1CCE80AA29B9.jpeg', name: 'Product Image 9' },
  { path: 'media/18C6E496-FF68-4179-8122-F5F001C242F7_1_105_c.jpeg', name: 'Product Image 10' },
  { path: 'media/1C81F005-21FB-40E3-8A6B-351E61BF02B1.jpeg', name: 'Product Image 11' },
  { path: 'media/1F3BCFAE-54AC-446D-B7CB-3FF71D7D6121_1_105_c.jpeg', name: 'Product Image 12' },
  { path: 'media/2217EECC-5210-43E2-A2B0-51E71FE91DB5_1_105_c.jpeg', name: 'Product Image 13' },
  { path: 'media/259DBFBD-5047-478A-9751-7BB328BD770B_4_5005_c.jpeg', name: 'Product Image 14' },
  { path: 'media/261AE389-8B3B-463A-A83C-4D9C722E8F2C_1_105_c.jpeg', name: 'Product Image 15' },
  { path: 'media/27A88827-D786-4ADE-885B-7EE41900A2C6_1_105_c.jpeg', name: 'Product Image 16' },
  { path: 'media/286304DC-7104-4D91-9EFF-5555B0AABBE5_1_105_c.jpeg', name: 'Product Image 17' },
  { path: 'media/295874FC-D9F0-465D-A927-BC43B92C3703_1_105_c.jpeg', name: 'Product Image 18' },
  { path: 'media/29A43E82-99BD-47A7-985F-F843063D2753_1_105_c.jpeg', name: 'Product Image 19' },
  { path: 'media/29F64024-4F4B-454A-9A73-3426AD5C1029_1_105_c.jpeg', name: 'Product Image 20' },
  { path: 'media/2E4F27A9-2783-4462-BDED-EF6ED0B539DD_1_105_c.jpeg', name: 'Product Image 21' },
  { path: 'media/2ECA77E9-EAF4-419A-988A-8A33CDE8D555_1_105_c.jpeg', name: 'Product Image 22' },
  { path: 'media/2F67B529-F5F2-45D4-8723-3D8DC795FC54_1_105_c.jpeg', name: 'Product Image 23' },
  { path: 'media/31473002-7EC8-4BEE-B634-AFD152C78649_1_105_c.jpeg', name: 'Product Image 24' },
  { path: 'media/321967DC-47A5-40F8-86E2-51056E35D824_1_105_c.jpeg', name: 'Product Image 25' },
  { path: 'media/32EBB05F-02BB-4BA8-85EC-3E6520E81860_1_105_c.jpeg', name: 'Product Image 26' },
  { path: 'media/3382BB28-F672-46BA-82D8-0B051AF54704.jpeg', name: 'Product Image 27' },
  { path: 'media/35DE2B33-D361-4E17-84FE-D9AFC906F9F5.jpeg', name: 'Product Image 28' },
  { path: 'media/38C008AB-AFA4-4D4B-A31C-F7F0B6406E34_1_105_c.jpeg', name: 'Product Image 29' },
  { path: 'media/3971547A-A139-4523-950C-9B3A4B3780B4_1_105_c.jpeg', name: 'Product Image 30' },
  { path: 'media/3C6A7138-0126-43BE-96F8-09ADF022C39E.jpeg', name: 'Product Image 31' },
  { path: 'media/3CE56898-D195-462A-8E41-C8E59E208914_1_105_c.jpeg', name: 'Product Image 32' },
  { path: 'media/3D0192A2-44CD-496C-85AC-69540C87510C_1_105_c.jpeg', name: 'Product Image 33' },
  { path: 'media/412E4981-78A6-49DA-A489-6B81DE2896E1_1_105_c.jpeg', name: 'Product Image 34' },
  { path: 'media/417753F3-E043-4C3D-AF9F-93C0F4153CC5_1_105_c.jpeg', name: 'Product Image 35' },
  { path: 'media/48E4D022-ECD3-4D1E-BB19-6C57CB6D12B8_1_105_c.jpeg', name: 'Product Image 36' },
  { path: 'media/4903A061-FDB5-48B0-AF76-ED50CCC38FE1_1_105_c.jpeg', name: 'Product Image 37' },
  { path: 'media/4A5CB201-A519-4A46-9940-930A10DAE302.jpeg', name: 'Product Image 38' },
  { path: 'media/4B72B532-DAEE-472D-B9E3-4C50ED0DA2FF_1_105_c.jpeg', name: 'Product Image 39' },
  { path: 'media/4EA9A262-27A4-4849-838C-BBBBF8C565E6.jpeg', name: 'Product Image 40' },
  { path: 'media/4FF71D41-0129-4C86-8604-98BC5931CB93_1_105_c.jpeg', name: 'Product Image 41' },
  { path: 'media/506A6C28-9538-42B1-8BB7-687A39E28834_1_105_c.jpeg', name: 'Product Image 42' },
  { path: 'media/51205610-018B-48AF-873C-BB3C43FD795E_1_105_c.jpeg', name: 'Product Image 43' },
  { path: 'media/5391A36E-0214-40BC-BB89-6EA888C2A339_1_105_c.jpeg', name: 'Product Image 44' },
  { path: 'media/5B076255-71F6-4AD7-9075-191732B64623_1_105_c.jpeg', name: 'Product Image 45' },
  { path: 'media/5D8BA0F4-20C7-40BF-961F-AE41CEBF220E_1_105_c.jpeg', name: 'Product Image 46' },
  { path: 'media/5DD6CEF5-8A40-40A5-959A-104C62DBFEE6_1_105_c.jpeg', name: 'Product Image 47' },
  { path: 'media/5EA758A2-3B72-46EE-9BAE-9D7504A1A667_1_105_c.jpeg', name: 'Product Image 48' },
  { path: 'media/5F1336C8-67E5-4EFB-818D-75BB85009CCC_1_105_c.jpeg', name: 'Product Image 49' },
  { path: 'media/65155E90-8C96-4E50-AA34-99A11C3877D0.jpeg', name: 'Product Image 50' },
  { path: 'media/6727ED8E-B3F4-43E5-B52B-41563A6F8B87_1_105_c.jpeg', name: 'Product Image 51' },
  { path: 'media/675A2360-7930-4D59-B4C2-9E3E5D7C4F4B_1_105_c.jpeg', name: 'Product Image 52' },
  { path: 'media/6BE17954-DFF1-4EE0-83AF-70CB76E5EBC3_1_105_c.jpeg', name: 'Product Image 53' },
  { path: 'media/6CF1A41E-0F3D-4D80-8D65-47C4C0DFE6FA.jpeg', name: 'Product Image 54' },
  { path: 'media/6F307F25-A192-4A14-8F87-8E103D85F8AF_1_105_c.jpeg', name: 'Product Image 55' },
  { path: 'media/6FCA7E7C-77A3-4D5C-BA26-8D828696D9C7_1_105_c.jpeg', name: 'Product Image 56' },
  { path: 'media/7096FA80-B8D4-4BA3-8FB0-80FD6438480D.jpeg', name: 'Product Image 57' },
  { path: 'media/73BF2C2D-816E-4774-B9B0-9F76367ECAC4_1_105_c.jpeg', name: 'Product Image 58' },
  { path: 'media/74C2A150-3021-4D81-BAD6-6C0CD6B2DB4E_1_105_c.jpeg', name: 'Product Image 59' },
  { path: 'media/7509AC53-1BDC-46D5-8238-B1BB0795EF22_1_105_c.jpeg', name: 'Product Image 60' },
  { path: 'media/784B49E1-2F12-4AB6-B791-D38CE6579BDD_1_105_c.jpeg', name: 'Product Image 61' },
  { path: 'media/794E090C-9473-46AC-A3DB-814BE93DF079_1_105_c.jpeg', name: 'Product Image 62' },
  { path: 'media/7E6195F6-3F4E-40B3-9B07-DB016EE0072A_1_105_c.jpeg', name: 'Product Image 63' },
  { path: 'media/84C92B30-0462-4260-95D6-189D117E0391_1_105_c.jpeg', name: 'Product Image 64' },
  { path: 'media/85897BFF-38F6-43E7-8207-EB25F175DA76_1_105_c.jpeg', name: 'Product Image 65' },
  { path: 'media/879C8912-F6F9-4442-9C7D-15345231C0DC_1_105_c.jpeg', name: 'Product Image 66' },
  { path: 'media/8994B741-EE66-4DB5-9CB0-EF54D1BDCAB7_1_105_c.jpeg', name: 'Product Image 67' },
  { path: 'media/89B20723-755D-4EC4-88BB-368C4EDE0B83_1_105_c.jpeg', name: 'Product Image 68' },
  { path: 'media/95AB2AEA-8C7B-40F3-BB4E-DABFB1394282_1_105_c.jpeg', name: 'Product Image 69' },
  { path: 'media/969F4329-6B19-4FDE-BCE2-4FAD24213C72_1_105_c.jpeg', name: 'Product Image 70' },
  { path: 'media/96C9A6C3-8E1C-41E2-88C5-88656F0AA203.jpeg', name: 'Product Image 71' },
  { path: 'media/98449CA8-3AF9-47BE-AA3F-289AE26FC331_1_105_c.jpeg', name: 'Product Image 72' },
  { path: 'media/9A7A8D1E-68F7-41EB-BE09-36D1B5D2DA5A_1_105_c.jpeg', name: 'Product Image 73' },
  { path: 'media/9AC3D020-3F5B-4CEC-8AF6-E1E0C337B18A_1_105_c.jpeg', name: 'Product Image 74' },
  { path: 'media/9E322CEB-B502-4ED0-BAC4-2E5D02F7B9F4_1_105_c.jpeg', name: 'Product Image 75' },
  { path: 'media/A35D5CE1-DE8D-4D84-A8FC-877016B77789_1_105_c.jpeg', name: 'Product Image 76' },
  { path: 'media/A730DCA4-A813-40BC-966C-8A45071F02D7_1_105_c.jpeg', name: 'Product Image 77' },
  { path: 'media/AB2B19DA-29A8-4B93-A000-73390DA09440_1_105_c.jpeg', name: 'Product Image 78' },
  { path: 'media/ABCAA8B4-3BF8-43D8-8AE3-D502C0CAEDE4_1_105_c.jpeg', name: 'Product Image 79' },
  { path: 'media/ABD5DF8F-0550-4918-A968-434840175D81_1_105_c.jpeg', name: 'Product Image 80' },
  { path: 'media/B4462078-27F1-45BE-BB72-13B3BA7A6252_1_105_c.jpeg', name: 'Product Image 81' },
  { path: 'media/B6377589-FA16-4966-BE87-1AC0C9FC0F1A.jpeg', name: 'Product Image 82' },
  { path: 'media/B9ED3A8D-0766-4280-996D-0C11D781CE78_1_105_c.jpeg', name: 'Product Image 83' },
  { path: 'media/BA05DD7C-46A4-4EFD-B922-A956755A94C8.jpeg', name: 'Product Image 84' },
  { path: 'media/BB7DDA8F-B3ED-4870-A4E4-901378DF755D_1_105_c.jpeg', name: 'Product Image 85' },
  { path: 'media/C085571C-F411-4825-8EFC-484424147D06_1_105_c.jpeg', name: 'Product Image 86' },
  { path: 'media/C45F5661-8A80-48C9-9BF9-2EC4B8779617.jpeg', name: 'Product Image 87' },
  { path: 'media/C466C83C-1155-497D-AE94-D994CF7F6428_1_105_c.jpeg', name: 'Product Image 88' },
  { path: 'media/C54C4A93-AB07-4EEB-A772-8DD86C0E986E_1_105_c.jpeg', name: 'Product Image 89' },
  { path: 'media/C891EE31-385F-42B4-AF1E-47E572ECB314_1_105_c.jpeg', name: 'Product Image 90' },
  { path: 'media/CB1821EB-4D28-40DB-A31B-B16C81FF4C30_1_105_c.jpeg', name: 'Product Image 91' },
  { path: 'media/CDD303A2-70BE-412A-8A53-3E041B56BA68_1_105_c.jpeg', name: 'Product Image 92' },
  { path: 'media/CDDA18FC-0276-472B-85DA-F470DB7B064E_1_105_c.jpeg', name: 'Product Image 93' },
  { path: 'media/CE7E2F9D-5C3B-434E-99CD-74F880DC791D_1_105_c.jpeg', name: 'Product Image 94' },
  { path: 'media/D2237B5C-6F44-4ACE-B743-3CDC23D5F551_1_105_c.jpeg', name: 'Product Image 95' },
  { path: 'media/D26CCA58-6EB8-493C-A16E-24C7B9AC1962_1_105_c.jpeg', name: 'Product Image 96' },
  { path: 'media/D52D2AD5-A210-4FB4-82AE-1E2388511609_1_105_c.jpeg', name: 'Product Image 97' },
  { path: 'media/D783EEA7-447E-4A42-B70F-CE4840D68785_1_105_c.jpeg', name: 'Product Image 98' },
  { path: 'media/D7F09E7F-1FE3-4321-8C6C-B2E8115388BE_1_105_c.jpeg', name: 'Product Image 99' },
  { path: 'media/D8BA08C3-18BE-4D7B-A77E-028EB59047B1_1_105_c.jpeg', name: 'Product Image 100' },
  { path: 'media/D8E5DC8F-51FA-4061-A685-DF82B38E1CD1_1_105_c.jpeg', name: 'Product Image 101' },
  { path: 'media/DC07DC66-C722-4177-9DC2-2E33E2EC479F_1_105_c.jpeg', name: 'Product Image 102' },
  { path: 'media/DFA4BDD6-9ED5-48CB-A05B-C23C3F1EC695_1_105_c.jpeg', name: 'Product Image 103' },
  { path: 'media/E377A473-282B-4CAB-B6B9-69E6BBECA400_1_105_c.jpeg', name: 'Product Image 104' },
  { path: 'media/E4AA9C11-805E-4960-B80C-128CF326D210_1_105_c.jpeg', name: 'Product Image 105' },
  { path: 'media/E634A73E-2A23-483F-A62D-6B4A8A5635C3_1_105_c.jpeg', name: 'Product Image 106' },
  { path: 'media/E8D88BBD-E8BE-4FA6-A2D1-8651925F53EF_1_105_c.jpeg', name: 'Product Image 107' },
  { path: 'media/E9CB45D0-6091-4565-B50F-C7496FCE65B0_1_105_c.jpeg', name: 'Product Image 108' },
  { path: 'media/EA08206C-6AC5-4E7D-9942-8142568CEA32_1_105_c.jpeg', name: 'Product Image 109' },
  { path: 'media/EA75F2F3-5BF2-466F-B1A1-A28231F67785.jpeg', name: 'Product Image 110' },
  { path: 'media/ED1200C0-E783-430A-8C9C-988B77397B91_1_105_c.jpeg', name: 'Product Image 111' },
  { path: 'media/F0CB9D6A-2A50-43CB-8D20-C485477C019A.jpeg', name: 'Product Image 112' },
  { path: 'media/F433F3BB-1F90-437D-9052-ED517405D5D3_1_105_c.jpeg', name: 'Product Image 113' },
  { path: 'media/F5AA9A87-5BD9-4A60-AE78-2D2F0B695936.jpeg', name: 'Product Image 114' },
  { path: 'media/FA03A476-C5EE-4B1B-A3C3-367F47211AF0_1_105_c.jpeg', name: 'Product Image 115' },
  { path: 'media/FA883158-0449-47BF-89DD-84FE94D81652.jpeg', name: 'Product Image 116' },
];

const Media = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredMedia = useMemo(() => allMedia, []);

  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="media" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="section-title text-foreground mt-2">
            Our <span className="text-gradient">Media</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Explore our products, facilities, and operations through our photo gallery.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <div className="px-6 py-2 rounded-full font-medium bg-accent text-accent-foreground flex items-center gap-2 shadow-lg">
            <ImageIcon className="w-4 h-4" />
            Photos
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredMedia.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMedia.map((media, index) => (
              <div
                key={`${media.path}-${index}`}
                className="card-industrial overflow-hidden group cursor-pointer relative aspect-square"
                onClick={() => openModal(media)}
              >
                <div className="relative w-full h-full overflow-hidden bg-muted">
                  <img
                    src={`${import.meta.env.BASE_URL}${media.path}`}
                    alt={media.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No media found for the selected filter.</p>
          </div>
        )}
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors z-10 shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-accent-foreground" />
          </button>
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}${selectedMedia.path}`}
                alt={selectedMedia.name}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Media;

