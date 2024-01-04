import { ArrowLeftOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons';
import { AxiosInstance } from '@app/api/axios/AxiosInstance';
import { CarModel, GetBrands } from '@app/components/types/catalog/catalogTypes';
import { Box, Checkbox, Grid, Stack, Tooltip } from '@mui/material';
import { Alert, Button, Input, Radio, Select, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
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
  const [year, setYear] = useState<number | null>(null);
  const [color, setColor] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [crossNumber, setCrossNumber] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [marking, setMarking] = useState<number | null>(null);
  const [isArchive, setIsArchive] = useState<boolean>(false);
  const [notForExport, setNotForExport] = useState<boolean>(false);
  const [siteLink, setSiteLink] = useState<string>('');
  const [video, setVideo] = useState<string>('');
  const [oldBarCode, setOldBarCode] = useState<string>('');
  const [oldData, setOldData] = useState<string>('');
  const [isUsed, setIsUsed] = useState<string>('is Used ?');
  const [status, setStatus] = useState<string>('Choose Spare Part Status');
  const [manufacturerId, setManufacturerId] = useState<number | null>(null);
  const [autopartId, setAutopartId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [brandData, setBrandData] = useState<GetBrands[]>([]);
  const [modelData, setModelData] = useState<CarModel[]>([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [priceId, setPriceId] = useState<number | null>(null);
  const [manufacturedNo, setManufacteredNo] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [selectedBrandModels, setSelectedBrandModels] = useState<CarModel[]>([]);

  const handleBrandChange = (value: number | null) => {
    const selectedBrand = brandData.find((brand) => brand.id === value);

    if (selectedBrand) {
      const modelsForSelectedBrand = modelData.filter((model) => model.brand_id === selectedBrand.id);
      setSelectedBrandModels(modelsForSelectedBrand);
    } else {
      setSelectedBrandModels([]);
    }

    setBrandId(value);
  };

  const getBrands = async () => {
    try {
      setLoading(true);
      const response = await AxiosInstance.get<GetBrands[]>('/options/brands');
      setBrandData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error); // Improved error logging
    } finally {
      setLoading(false);
    }
  };

  const getModels = async () => {
    try {
      setLoading(true);
      const response = await AxiosInstance.get<CarModel[]>('/options/models');
      setModelData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error('Error fetching models:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchData();
    getBrands();
    getModels();
  }, []);

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
      price_id: priceId,
      manufactured_no: manufacturedNo,
      category_id: categoryId,
    };

    AxiosInstance.post('/autoparts/', autopartData)
      .then((response) => {
        if (!response.data.error) {
          alert('Successfully added new autopart!');
          clearInput();
          console.log('Auto Part data' + autopartData);
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
    setYear(null);
    setColor('');
    setComment('');
    setCrossNumber('');
    setNote('');
    setMarking(null);
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
    setShowSuccessAlert(true);
    setPriceId(null);
    setManufacteredNo('');
    setCategoryId(null);
  };

  const handleAlertClose = () => {
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  const handleCheckboxChange = (event: any, setterFunction: any) => {
    setterFunction(event.target.checked);
  };

  useEffect(() => {
    handleAlertClose();
  });

  return (
    <div style={{ width: location.pathname === '/add-new-receipt' ? '100%' : '' }}>
      <Stack direction="row" justifyContent="flex-end">
        {showSuccessAlert && (
          <Alert
            message="Success Text"
            style={{ color: 'red' }}
            type="success"
            showIcon
            closable
            onClose={handleAlertClose}
          />
        )}
      </Stack>
      {location.pathname === '/incomes' ? (
        <Button onClick={() => navigation('/add-new-receipt')} icon={<PlusOutlined />}>
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
              <Select
                style={{ width: '100%', textTransform: 'capitalize' }}
                showSearch
                placeholder="номер производителя"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={brandData.map((brand) => ({
                  value: brand.id,
                  label: brand.name,
                  number_of_part: brand.number_of_part,
                }))}
                onChange={handleBrandChange}
              />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Select
                style={{ width: '100%', textTransform: 'capitalize' }}
                showSearch
                placeholder="производитель"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={selectedBrandModels.map((model) => ({
                  value: model.id,
                  label: model.name,
                  brandId: model.brand_id,
                }))}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Input placeholder="Cross Number" value={crossNumber} onChange={(e) => setCrossNumber(e.target.value)} />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Input
                placeholder="Generation ID"
                value={generationId !== null ? generationId.toString() : ''}
                onChange={(e) => setGenerationId(Number(e.target.value))}
              />
            </Grid>
          </Grid>
          <Typography style={{ marginTop: 30, fontSize: 18 }}>Description of the new spare part</Typography>
          <Box sx={{ background: 'gray', width: '100%', height: 2 }} mt={1} />
          <Stack direction="row" spacing={3} mt={3} alignItems="center">
            <Radio.Group value={frontBack} onChange={(e) => setFrontBack(e.target.value)}>
              <Radio.Button value="front" style={{ width: 100 }}>
                front
              </Radio.Button>
              <Radio.Button value="back" style={{ width: 100 }}>
                back
              </Radio.Button>
            </Radio.Group>

            <Radio.Group value={leftRight} onChange={(e) => setLeftRight(e.target.value)}>
              <Radio.Button style={{ width: 100 }} value="left">
                left
              </Radio.Button>
              <Radio.Button style={{ width: 100 }} value="right">
                right
              </Radio.Button>
            </Radio.Group>
          </Stack>
          <Grid container spacing={3} mt={4}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input
                placeholder="Spare Part"
                value={numberOfPart !== null ? numberOfPart.toString() : ''}
                onChange={(e) => setNumberOfPart(Number(e.target.value))}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input
                placeholder="Year"
                value={year !== null ? year.toString() : ''}
                onChange={(e) => setYear(Number(e.target.value))}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Comment for All" value={comment} onChange={(e) => setComment(e.target.value)} />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input
                placeholder="Marking"
                value={marking !== null ? marking.toString() : ''}
                onChange={(e) => setMarking(Number(e.target.value))}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Checkbox
                checked={isArchive}
                onChange={(e) => handleCheckboxChange(e, setIsArchive)}
                color="primary"
                inputProps={{ 'aria-label': 'Is Archive' }}
              />
              Is Archive
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Checkbox
                checked={notForExport}
                onChange={(e) => handleCheckboxChange(e, setNotForExport)}
                color="primary"
                inputProps={{ 'aria-label': 'Not For Export' }}
              />
              Not For Export
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input
                placeholder="Site Link"
                value={siteLink !== null ? siteLink.toString() : ''}
                onChange={(e) => setSiteLink(e.target.value)}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input
                placeholder="Old Data"
                value={oldData !== null ? oldData.toString() : ''}
                onChange={(e) => setOldData(e.target.value)}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Select style={{ width: '100%' }} value={isUsed} onChange={(value) => setIsUsed(value)}>
                <Select.Option value="new">New</Select.Option>
                <Select.Option value="used">Used</Select.Option>
                <Select.Option value="contract">Contract</Select.Option>
              </Select>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Select style={{ width: '100%' }} value={status} onChange={(value) => setStatus(value)}>
                <Select.Option value="active">Active</Select.Option>
                <Select.Option value="passive">Passive</Select.Option>
                <Select.Option value="pending">Pending</Select.Option>
                <Select.Option value="canceled">Canceled</Select.Option>
                <Select.Option value="rejected">Rejected</Select.Option>
              </Select>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Input
                placeholder="Manufactured ID"
                value={manufacturerId !== null ? manufacturerId.toString() : ''}
                onChange={(e) => setManufacturerId(Number(e.target.value))}
              />
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent="flex-end" spacing={3} mt={4}>
            <Button onClick={clearInput}>Cancel</Button>
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
