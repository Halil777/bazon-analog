import { ArrowLeftOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons';
import { Loading } from '@app/components/common/Loading/Loading';
import { Box, Grid, Stack, Tooltip } from '@mui/material';
import { Button, Input, Radio, Typography } from 'antd';
import axios from 'axios';
import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AddNewReceipt: FC = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [brandId, setBrandId] = useState<number | null>(null);
  const [modelId, setModelId] = useState<number | null>(null);
  const [generationId, setGenerationId] = useState<number | null>(null);
  const [name, setName] = useState<string>('');
  const [frontBack, setFrontBack] = useState<string>('');
  const [leftRight, setLeftRight] = useState<string>('');
  const [numberOfPart, setNumberOfPart] = useState<number | null>(null);
  const [year, setYear] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [crossNumber, setCrossNumber] = useState<number | null>(null);
  const [note, setNote] = useState<string>('');
  const [marking, setMarking] = useState<string>('');
  const [isArchive, setIsArchive] = useState<boolean>(false);
  const [notForExport, setNotForExport] = useState<boolean>(false);
  const [siteLink, setSiteLink] = useState<string>('');
  const [video, setVideo] = useState<string>('');
  const [oldBarCode, setOldBarCode] = useState<string>('');
  const [oldData, setOldData] = useState<string>('');
  const [isUsed, setIsUsed] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [manufacturerId, setManufacturerId] = useState<number | null>(null);
  const [autopartId, setAutopartId] = useState<number | null>(null);
  const [createdAt, setCreatedAt] = useState<string>('');
  const [updatedAt, setUpdatedAt] = useState<string>('');

  // const handleButtonClick = () => {
  //   if (!loading) {
  //     setSuccess(false);
  //     setLoading(true);
  //     addData();
  //   }
  // };

  const addAutopart = () => {
    const autopartData = {
      brand_id: brandId,
      model_id: modelId,
      generation_id: generationId,
      name: name,
      front_back: frontBack,
      left_right: leftRight,
      number_of_part: numberOfPart,
      year: year,
      color: color,
      comment: comment,
      cross_number: crossNumber,
      note: note,
      marking: marking,
      is_archive: isArchive,
      not_for_export: notForExport,
      site_link: siteLink,
      video: video,
      old_bar_code: oldBarCode,
      old_data: oldData,
      is_used: isUsed,
      status: status,
      manufacturer_id: manufacturerId,
      autopart_id: autopartId,
      created_at: createdAt,
      updated_at: updatedAt,
      // ... (other autopart details)
    };

    axios
      .post('http://95.85.121.153:3030/autoparts', autopartData)
      .then((response) => {
        if (!response.data.error) {
          alert('Successfully added new autopart!');
          clearInput();
          // ... (other actions after successful addition)
        } else {
          //   showError('Something went wrong!');
          alert('');
        }
      })
      .catch((error) => {
        //   showError(error + '');
        alert(error + '');
      });
  };

  const clearInput = () => {
    setBrandId(null);
    setModelId(null);
    setGenerationId(null);
    setName('');
    setFrontBack('');
    setLeftRight('');
    setNumberOfPart(null);
    setYear('');
    setColor('');
    setComment('');
    setCrossNumber(null);
    setNote('');
    setMarking('');
    setIsArchive(false);
    setNotForExport(false);
    setSiteLink('');
    setVideo('');
    setOldBarCode('');
    setOldData('');
    setIsUsed('');
    setStatus('');
    setManufacturerId(null);
    setAutopartId(null);
    setCreatedAt('');
    setUpdatedAt('');
    // ... (clear other state variables)
  };

  return (
    <div style={{ width: location.pathname === '/add-new-receipt' ? '100%' : '' }}>
      {location.pathname === '/incomes' ? (
        <Button onClick={(e) => navigation('/add-new-receipt')} icon={<PlusOutlined />}>
          Add New Receipt
        </Button>
      ) : null}
      {location.pathname === '/add-new-receipt' ? (
        <>
          <Stack direction="row" mb={3} justifyContent="space-between" alignItems="center">
            <Typography style={{ fontSize: 28 }}>Adding a new product</Typography>
            <Tooltip title="Back to Incomes">
              <ArrowLeftOutlined style={{ cursor: 'pointer' }} onClick={(e) => navigation('/incomes')} />
            </Tooltip>
          </Stack>
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Input placeholder="Number manufacturer" />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Input placeholder="Manufacturer" />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Input placeholder="Cross Number" />
            </Grid>
          </Grid>
          <Typography style={{ marginTop: 30, fontSize: 18 }}>Description of the new spare part</Typography>
          <Box sx={{ background: 'gray', width: '100%', height: 2 }} mt={1} />
          <Stack direction="row" spacing={3} mt={3} alignItems="center">
            <Radio.Group>
              <Radio.Button style={{ width: 100 }}>Front</Radio.Button>
              <Radio.Button style={{ width: 100 }}>Back</Radio.Button>
            </Radio.Group>
            <Radio.Group>
              <Radio.Button style={{ width: 100 }}>Left</Radio.Button>
              <Radio.Button style={{ width: 100 }}>Right</Radio.Button>
            </Radio.Group>
            {/* Place for upload image button */}
          </Stack>
          <Grid container spacing={3} mt={4}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Spare Part" />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Markirowka" />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Color" />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Comment for All" />
            </Grid>
            {/* Need to add comment input for users and for yourself */}
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Brand" />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Model" />
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent="flex-end" mt={4}>
            <Button icon={<SaveOutlined />} onClick={addAutopart}>
              Add Spare Part
            </Button>
          </Stack>
        </>
      ) : null}
    </div>
  );
};

export default AddNewReceipt;
