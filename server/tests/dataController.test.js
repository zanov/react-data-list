const DataController = require('../dataController');

describe('DataController', () => {
  let dataController;

  beforeEach(() => {
    dataController = new DataController();
  });

  test('should get all data', (done) => {
    const mockReq = {};
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    dataController.getAllData(mockReq, mockRes);

    // Since it's async with fs, need to wait
    setTimeout(() => {
      expect(mockRes.json).toHaveBeenCalled();
      done();
    }, 100);
  });

  test('should get data item by id', (done) => {
    const mockReq = {params: {id: '1'}};
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    dataController.getDataItem(mockReq, mockRes);

    setTimeout(() => {
      expect(mockRes.json).toHaveBeenCalled();
      done();
    }, 100);
  });
});
