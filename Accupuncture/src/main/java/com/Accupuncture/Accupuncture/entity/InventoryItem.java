//---InventoryItemEntity

package com.Accupuncture.Accupuncture.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "INVENTORY_ITEM")
@NoArgsConstructor
@AllArgsConstructor

public class InventoryItem {
    @Id
    @Column(name="ITEMID")
    private int itemID;

    @Column(name="DATE")
    private String date;

    @Column(name="ITEM_NAME")
    private String itemName;

    @Column(name="QUANTITY")
    private int qty;

    @Column(name="SIZE")
    private String size;

    @Column(name="UNIT_PRICE")
    private String unitPrice;
}
