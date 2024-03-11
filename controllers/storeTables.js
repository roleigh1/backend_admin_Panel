const { ProductsDB, BestSellerItemsDB } = require("../models/models");
const { Op } = require("sequelize")
const getInventoryTable = async (req, res) => {
  try {
    const tablesParam = req.params.tables;
    switch (tablesParam) {
      case 'bestseller':
        const bestseller = await BestSellerItemsDB.findAll();
        res.json({ bestseller });
        break;
      case 'products':
        const products = await ProductsDB.findAll();
        res.json({ products });
        break;
      default:
        console.log('default case');
    }
  } catch (error) {
    console.error('Error getting inventory Tables', error)
    res.status(400).json({ message: 'Problem getting Inventory Tables', message });
  }
}

const getDeleteID = async (req, res) => {
  try {
    const { idForDelete, table } = req.body;
    console.log("Selected Id recived", idForDelete);
    console.log("Table recived:", table);
    res.status(200).json({ message: "Got selected ID", idForDelete });
      switch(table) {
        case 'Bestseller':
      const DeleteFromBestseller = await BestSellerItemsDB.destroy({
        where: {
          id: {
            [Op.in]: idForDelete
          }
        }
      })
        break; 
      case 'Products': 
      const DeleteFromProducts = await ProductsDB.destroy({
        where: {
          id: {
            [Op.in]: idForDelete
          }
        }
      })
  
    break;
    default: 
    console.log("nothing deleted"); 
  }
  } catch (error) {
    console.error("Error receiving selected ID", error);
    res.status(400).json({ message: "Error sending post request" })
  }

}
const getSelectID = async (req, res) => {
  try {
    let { idForSelect, table } = req.body;
    console.log("Id received", idForSelect);
    console.log("Table received", table);
    idForSelect = Number(idForSelect)
    if (table === "Bestseller") {
      const SelectFromBestseller = await BestSellerItemsDB.findAll({
        where: {
          id: idForSelect
        }
      });
      res.status(200).json({ message: "Got Select from Bestseller", SelectFromBestseller });
    } else {
      const SelectFromProducts = await ProductsDB.findAll({
        where: {
          id: idForSelect
        }
      })
      res.status(200).json({ message: "Got Select from Products", SelectFromProducts });
    }
  } catch (error) {
    console.error("Error receiving ID", error);
    res.status(400).json({ message: "Error sending get Req" });
  }
};

const updateTableData = async (req, res) => {
  try {
    const { editAbleData, table } = req.body;
    console.log("Received edited Data", editAbleData);

    if (table === "Bestseller") {
      const editBestSellerData = await BestSellerItemsDB.update(
        {
          name: editAbleData.name,
          price: editAbleData.price,
          image: editAbleData.image,
          type: editAbleData.type,
        },
        {
          where: {
            id: editAbleData.id,
          },
        }
      );


    } else {
      const editProductData = await ProductsDB.update(
        {
          name: editAbleData.name,
          price: editAbleData.price,
          image: editAbleData.image,
          type: editAbleData.type,
        },
        {
          where: {
            id: editAbleData.id,
          },
        }
      )
    }

  } catch (error) {
    console.error("Error updating data", error);
    res.status(400).json({ message: "Error sending post request" });
  }
};
module.exports = {
  getInventoryTable,
  getDeleteID,
  getSelectID,
  updateTableData
}