
import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Image } from '@chakra-ui/react'
export default function BenefitsMembers(){

    return(
      <div className="col" >
        <Tabs maxWidth="600">
  <TabList justifyContent="space-evenly">
    <Tab>Tiêu chuẩn</Tab>
    <Tab>Vàng</Tab>
    <Tab>Kim cương</Tab>
  </TabList>

  <TabPanels>
    <TabPanel display="flex" flexDirection="column" gap="5" w="full" flexWrap>
      <Box flexGrow="1" minW="50%" display="flex" flexDirection="column" alignItems="center" gap="3">
          <Image
        borderRadius='full'
        boxSize='40px'
        src='https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png'
        />
         <p>Tặng 01 phần bánh vào sinh nhật</p>
      </Box>
      <Box flexGrow="1" minW="50%" display="flex" flexDirection="column" alignItems="center" gap="3">
          <Image
        borderRadius='full'
        boxSize='40px'
        src='https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png'
        />
         <p>Sử dụng điểm để giảm giá</p>
      </Box>
    </TabPanel>
    <TabPanel display="flex" flexDirection="column" gap="5" w="full" flexWrap>

    <Box flexGrow="1" minW="50%" display="flex" flexDirection="column" alignItems="center" gap="3">
          <Image
        borderRadius='full'
        boxSize='40px'
        src='https://minio.thecoffeehouse.com/image/tchmobileapp/882_v5Membership2voucher.png'
        />
         <p>Ưu đãi Mua 2 tặng 1</p>
      </Box>
      <Box flexGrow="1" minW="50%" display="flex" flexDirection="column" alignItems="center" gap="3">
          <Image
        borderRadius='full'
        boxSize='40px'
        src='https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png'
        />
         <p>Tặng 01 phần bánh sinh nhật</p>
      </Box>
      <Box flexGrow="1" minW="50%" display="flex" flexDirection="column" alignItems="center" gap="3">
          <Image
        borderRadius='full'
        boxSize='40px'
        src='https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png'
        />
         <p>Sử dụng điểm để giảm giá</p>
      </Box>
     

    </TabPanel>
    <TabPanel display="flex" flexDirection="column" gap="5" w="full" flexWrap>
    <Box flexGrow="1" minW="50%" display="flex" flexDirection="column" alignItems="center" gap="3">
          <Image
        borderRadius='full'
        boxSize='40px'
        src='https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png'
        />
         <p>Miễn phí 01 phần nước bất kì</p>
      </Box>
    <Box flexGrow="1" minW="50%" display="flex" flexDirection="column" alignItems="center" gap="3">
          <Image
        borderRadius='full'
        boxSize='40px'
        src='https://minio.thecoffeehouse.com/image/tchmobileapp/882_v5Membership2voucher.png'
        />
         <p>Ưu đãi Mua 2 tặng 1</p>
      </Box>
      <Box flexGrow="1" minW="50%" display="flex" flexDirection="column" alignItems="center" gap="3">
          <Image
        borderRadius='full'
        boxSize='40px'
        src='https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png'
        />
         <p>Tặng 01 phần bánh sinh nhật</p>
      </Box>
      <Box flexGrow="1" minW="50%" display="flex" flexDirection="column" alignItems="center" gap="3">
          <Image
        borderRadius='full'
        boxSize='40px'
        src='https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png'
        />
         <p>Sử dụng điểm để giảm giá</p>
      </Box>
    </TabPanel>
  </TabPanels>
</Tabs>
</div>
    )
}