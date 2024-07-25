//---InventoryItemService

package com.Accupuncture.Accupuncture.service;

import com.Accupuncture.Accupuncture.entity.InventoryItem;
import com.Accupuncture.Accupuncture.repository.InventoryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryItemService {
    @Autowired
    private InventoryItemRepository inventoryItemRepostory;

    public InventoryItem saveItems(InventoryItem inventoryItem){

        return inventoryItemRepostory.save(inventoryItem);
    }
    public List<InventoryItem> getAllItems(){

        return inventoryItemRepostory.findAll();
    }

    public InventoryItem getItemById(int itemId){

        return inventoryItemRepostory.findById(itemId).orElse(null);
    }

    public InventoryItem updateItem(InventoryItem inventoryItem){

        InventoryItem updateItem = inventoryItemRepostory.findById(inventoryItem.getItemID()).orElse(null);
        if(updateItem != null){

            updateItem.setItemName(inventoryItem.getItemName());
            updateItem.setDate(inventoryItem.getDate());
            updateItem.setQty(inventoryItem.getQty());
            updateItem.setSize(inventoryItem.getSize());
            updateItem.setUnitPrice(inventoryItem.getUnitPrice());
            return updateItem;
        }
        return null;
    }

    public String deleteItem(int itemID){

        if(inventoryItemRepostory.existsById(itemID)){
            inventoryItemRepostory.deleteById(itemID);
            return "Deleted " + itemID;
        }else{
            return "Item ID do not exist!";
        }
    }
}
