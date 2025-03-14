/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

 -- Create the extension table to store the custom fields.
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID('[ext].KREMYVALUETABLE')AND type in (N'U')) 
BEGIN
 CREATE TABLE
        [ext].[KREMYVALUETABLE]
        
    (   [REPLICATIONCOUNTERFROMORIGIN] int IDENTITY(1,1) NOT NULL,
        [RECID] [bigint] NOT NULL,
        [ACCOUNTNUM] NVARCHAR(100)  DEFAULT (('')),
        [VALUEID] NVARCHAR(100) DEFAULT (('')),
        [EMAIL] NVARCHAR(50)  DEFAULT (('')),
        [PHONE] NVARCHAR(25) DEFAULT (('')),
        [NAME] NVARCHAR(100) DEFAULT ((''))
        CONSTRAINT [I_KREMYVALUETABLE] PRIMARY KEY CLUSTERED 
        (
	        [REPLICATIONCOUNTERFROMORIGIN],
	        [RECID] ASC
        ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]

    ALTER TABLE [ext].[KREMYVALUETABLE] WITH CHECK ADD CHECK (([REPLICATIONCOUNTERFROMORIGIN]<>(0)))
END
GO
GRANT SELECT ON [ext].[KREMYVALUETABLE] TO [UsersRole];
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KREMYVALUETABLE] TO [DataSyncUsersRole]
GO


IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID('[ext].KREMYVALUETRANS')AND type in (N'U')) 
BEGIN
    CREATE TABLE
        [ext].[KREMYVALUETRANS]
        
    (   [REPLICATIONCOUNTERFROMORIGIN] int IDENTITY(1,1) NOT NULL,
        [ROWVERSION] timestamp,
        [DATAAREAID] nvarchar(4) DEFAULT(('dat')),
        [CREATEDDATETIME] datetime DEFAULT((getutcdate())),
		[MODIFIEDDATETIME] datetime DEFAULT((getutcdate())),
        [AMOUNT]     INT DEFAULT ((0)),
        [EXCHANGERATE]    INT  DEFAULT ((0)),
        [OUTLETID] NVARCHAR(64)  DEFAULT (('')),
        [REFERENCENO] NVARCHAR(64) DEFAULT (('')),
        [VALUEID] NVARCHAR(64) DEFAULT (('')),
        [ACCOUNTNUM] NVARCHAR(100)  DEFAULT (('')),
        [TRANSACTIONID] NVARCHAR(100)  DEFAULT (('')),
        [CLIENT] NVARCHAR(100)  DEFAULT (('')),
        [SIGN] NVARCHAR(100) DEFAULT (('')),
        [ADJUSTEDREFERENCENO] NVARCHAR(100) DEFAULT (('')),
        [ADJUSMENTTYPE] NVARCHAR(100) DEFAULT ((''))
        CONSTRAINT [I_KREMYVALUETRANS] PRIMARY KEY CLUSTERED 
        (
	        [REPLICATIONCOUNTERFROMORIGIN],
	        [TRANSACTIONID] ASC
        ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]

    ALTER TABLE [ext].[KREMYVALUETRANS] WITH CHECK ADD CHECK (([REPLICATIONCOUNTERFROMORIGIN]<>(0)))
END
GO
GRANT SELECT ON [ext].[KREMYVALUETRANS] TO [UsersRole];
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KREMYVALUETRANS] TO [DataSyncUsersRole]
GO

-- Create a stored procedure CRT can use to add entries to the custom table.

IF OBJECT_ID(N'[ext].[KREMYVALUETRANSINSERT]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREMYVALUETRANSINSERT]
GO

CREATE PROCEDURE [ext].[KREMYVALUETRANSINSERT]
    @amount    INT,
    @exchangeRate  INT,
    @outletID  NVARCHAR(64),
    @referenceNo  NVARCHAR(64), 
    @valueID  NVARCHAR(64), 
    @accountNum  NVARCHAR(64), 
    @clientID  NVARCHAR(64), 
    @sign  NVARCHAR(100),
    @TransId NVARCHAR(90),
    @adjustedReferenceNo NVARCHAR(90),
    @adjustmentType NVARCHAR(90),
	@dataAreaId NVARCHAR(4)
AS
BEGIN
    SET NOCOUNT ON

    INSERT INTO
         ext.KREMYVALUETRANS
        (AMOUNT, EXCHANGERATE, OUTLETID, REFERENCENO, VALUEID, ACCOUNTNUM, CLIENT, SIGN, TRANSACTIONID, ADJUSTEDREFERENCENO, ADJUSMENTTYPE, DATAAREAID)
    OUTPUT
        INSERTED.valueID
    VALUES
        (@amount, @exchangeRate, @outletID, @referenceNo, @valueID, @accountNum, @clientID, @sign, @TransId, @adjustedReferenceNo, @adjustmentType, @dataAreaId)
END;
GO

GRANT EXECUTE ON [ext].[KREMYVALUETRANSINSERT] TO [UsersRole];
GO

GRANT EXECUTE ON [ext].[KREMYVALUETRANSINSERT] TO [DeployExtensibilityRole];
GO

-- Create the custom view that can query a complete Example Entity.

IF (SELECT OBJECT_ID('[ext].[KREMYVALUETRANSVIEW]')) IS NOT NULL
    DROP VIEW [ext].[KREMYVALUETRANSVIEW]
GO

CREATE VIEW [ext].[KREMYVALUETRANSVIEW] AS
(
    SELECT
        et.AMOUNT,
        et.EXCHANGERATE,
        et.OUTLETID,
        et.REFERENCENO,
        et.ACCOUNTNUM,
        et.VALUEID,
        et.CLIENT,
        et.SIGN,
        et.TRANSACTIONID,
        et.ADJUSTEDREFERENCENO,
        et.ADJUSMENTTYPE
    FROM
        [ext].KREMYVALUETRANS et
)
GO

GRANT SELECT ON OBJECT::[ext].[KREMYVALUETRANSVIEW] TO [UsersRole];
GO

GRANT SELECT ON OBJECT::[ext].[KREMYVALUETRANSVIEW] TO [DeployExtensibilityRole];
GO

-- Create a stored procedure CRT can use to perform updates.
IF OBJECT_ID(N'[ext].[KREMYVALUETRANSUPDATE]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREMYVALUETRANSUPDATE]
GO

CREATE PROCEDURE [ext].[KREMYVALUETRANSUPDATE]
    @referenceNo  NVARCHAR(64),
    @TransId  NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON

    UPDATE
        ext.KREMYVALUETRANS
    SET
        REFERENCENO = @referenceNo
        WHERE
        TRANSACTIONID = @TransId
END;
GO

GRANT EXECUTE ON [ext].[KREMYVALUETRANSUPDATE] TO [UsersRole];
GO

GRANT EXECUTE ON [ext].[KREMYVALUETRANSUPDATE] TO [DeployExtensibilityRole];
GO


-- Create a stored procedure CRT can use to delete Example Entities.

IF OBJECT_ID(N'[ext].[KREMYVALUETRANSDELETE]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREMYVALUETRANSDELETE]
GO

CREATE PROCEDURE [ext].[KREMYVALUETRANSDELETE]
    @transId           NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON

     DELETE FROM
        ext.KREMYVALUETRANS
    WHERE
       TRANSACTIONID = @transId
END;
GO

GRANT EXECUTE ON [ext].[KREMYVALUETRANSDELETE] TO [UsersRole];
GO

GRANT EXECUTE ON [ext].[KREMYVALUETRANSDELETE] TO [DeployExtensibilityRole];
GO

-- get data transactionTable
IF OBJECT_ID(N'[ext].[KREGETRETAILTRANSTABLE]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREGETRETAILTRANSTABLE]
GO

CREATE PROCEDURE [ext].[KREGETRETAILTRANSTABLE]
    @TransId  NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON

	SELECT
       trs.TRANSACTIONID,
       trs.PAYMENTAMOUNT,
       trs.CUSTACCOUNT,
       trs.CUSTOMERNAME,
       trs.INVENTLOCATIONID,
       trs.RECEIPTID,
       trs.COMMENT
    FROM [ax].[RETAILTRANSACTIONTABLE] trs
	WHERE trs.TRANSACTIONID = @TransId
end 
go

GRANT EXECUTE ON [ext].[KREGETRETAILTRANSTABLE] TO [UsersRole];
GO

GRANT EXECUTE ON [ext].[KREGETRETAILTRANSTABLE] TO [DeployExtensibilityRole];
GO

-- extend table retailtransTable 
--IF OBJECT_ID(N'[ext].[RETAILTRANSACTIONTABLE]', N'P') IS NOT NULL
--    DROP PROCEDURE [ext].[RETAILTRANSACTIONTABLE]
--GO
--CREATE TABLE [ext].[KRERETAILTRANSACTIONTABLE](
--[TRANSACTIONID] [nvarchar](100) NOT NULL, -- FK to [crt].RETAILTRANSACTIONTABLE
--[POINT] [int] DEFAULT (0),
--[MYVALUEID] [nvarchar](20) DEFAULT (''),
--[CREATEDDATETIME] datetime DEFAULT((getutcdate())),
--[MODIFIEDDATETIME] datetime DEFAULT((getutcdate())),
--CONSTRAINT [EXT_KRERETAILTRANSACTIONTABLE_PK] PRIMARY KEY CLUSTERED
--(
--    [TRANSACTIONID]
--) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--     ) ON [PRIMARY]
--GO
--GRANT INSERT ON [ext].[KRERETAILTRANSACTIONTABLE] TO [DataSyncUsersRole];
--GO
--GRANT DELETE ON [ext].[KRERETAILTRANSACTIONTABLE] TO [DataSyncUsersRole];
--GO
--GRANT UPDATE ON [ext].[KRERETAILTRANSACTIONTABLE] TO [DataSyncUsersRole];
--GO
--GRANT SELECT ON [ext].[KRERETAILTRANSACTIONTABLE] TO [DataSyncUsersRole];
--GO

IF (SELECT OBJECT_ID('[ext].[KRERETAILTRANSACTIONTABLERECEIPT]')) IS NULL 
BEGIN
CREATE TABLE [ext].[KRERETAILTRANSACTIONTABLERECEIPT]
(
[TRANSACTIONID] [nvarchar](100) NOT NULL,
[ISPRINT] [INT]  DEFAULT (0),
CONSTRAINT [EXT_KRERETAILTRANSACTIONTABLERECEIPT_PK] PRIMARY KEY CLUSTERED
(
    [TRANSACTIONID]
) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
     ) ON [PRIMARY]
ALTER TABLE [ext].[KRERETAILTRANSACTIONTABLERECEIPT] WITH CHECK ADD CHECK (([TRANSACTIONID] != ''))
END
GO
GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KRERETAILTRANSACTIONTABLERECEIPT] TO [DataSyncUsersRole]
GO


IF OBJECT_ID(N'[ext].[KREINSERTRETAILTRANSACTIONTABLERECEIPT]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREINSERTRETAILTRANSACTIONTABLERECEIPT]
GO

CREATE PROCEDURE [ext].[KREINSERTRETAILTRANSACTIONTABLERECEIPT]
    @TransId    NVARCHAR(100),
    @isprint  INT
    
AS
BEGIN
    SET NOCOUNT ON

    INSERT INTO
         ext.KRERETAILTRANSACTIONTABLERECEIPT
        (TRANSACTIONID, ISPRINT)
    OUTPUT
        INSERTED.ISPRINT
    VALUES
        (@TransId, @isprint)
END;
GO

GRANT EXECUTE ON [ext].[KREINSERTRETAILTRANSACTIONTABLERECEIPT] TO [UsersRole];
GO
GRANT EXECUTE ON [ext].[KREINSERTRETAILTRANSACTIONTABLERECEIPT] TO [PublishersRole];
GO
GRANT EXECUTE ON [ext].[KREINSERTRETAILTRANSACTIONTABLERECEIPT] TO [DeployExtensibilityRole];
GO


-- UPDATE retailtranstable
IF OBJECT_ID(N'[ext].[KREUPDATERETAILTRANSTABLE]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREUPDATERETAILTRANSTABLE]
GO

CREATE PROCEDURE [ext].[KREUPDATERETAILTRANSTABLE]
    @ValuePoint  NVARCHAR(80),
    @TransId  NVARCHAR(90)
AS
BEGIN
    SET NOCOUNT ON

    UPDATE
        [ax].[KRERETAILTRANSACTIONTABLE]
    SET
        COMMENT = @ValuePoint
        WHERE
        TRANSACTIONID = @TransId
END;
GO

GRANT EXECUTE ON [ext].[KREUPDATERETAILTRANSTABLE] TO [UsersRole];
GO
GRANT EXECUTE ON [ext].[KREUPDATERETAILTRANSTABLE] TO [PublishersRole];
GO
GRANT EXECUTE ON [ext].[KREUPDATERETAILTRANSTABLE] TO [DeployExtensibilityRole];
GO

-- insert ext retailtranstable

IF OBJECT_ID(N'[ext].[KREINSERTRETAILTRANSTABLE]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREINSERTRETAILTRANSTABLE]
GO

CREATE PROCEDURE [ext].[KREINSERTRETAILTRANSTABLE]
    @TransId    NVARCHAR(100),
    @ValueId  NVARCHAR(70),
    @Point  INT
    
AS
BEGIN
    SET NOCOUNT ON

    INSERT INTO
         ext.KRERETAILTRANSACTIONTABLE
        (TRANSACTIONID, MYVALUEID, POINT)
    OUTPUT
        INSERTED.MYVALUEID
    VALUES
        (@TransId, @ValueId, @Point)
END;
GO

GRANT EXECUTE ON [ext].[KREINSERTRETAILTRANSTABLE] TO [UsersRole];
GO
GRANT EXECUTE ON [ext].[KREINSERTRETAILTRANSTABLE] TO [PublishersRole];
GO
GRANT EXECUTE ON [ext].[KREINSERTRETAILTRANSTABLE] TO [DeployExtensibilityRole];
GO


IF OBJECT_ID(N'[ext].[RETAILTRANSACTIONPAYMENTTRANSUPDATE]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[RETAILTRANSACTIONPAYMENTTRANSUPDATE]
GO

CREATE PROCEDURE [ext].[RETAILTRANSACTIONPAYMENTTRANSUPDATE]
    @tenderType  int,
    @lineNum int,
    @TransId  NVARCHAR(90)
AS
BEGIN
    SET NOCOUNT ON

    UPDATE
        [ax].[RETAILTRANSACTIONPAYMENTTRANS]
    SET
        AMOUNTTENDERED = 0
        WHERE
        TRANSACTIONID = @TransId and
        CHANGELINE = @lineNum and 
        TENDERTYPE = @tenderType

        
END;
GO

GRANT EXECUTE ON [ext].[RETAILTRANSACTIONPAYMENTTRANSUPDATE] TO [UsersRole];
GO
GRANT EXECUTE ON [ext].[RETAILTRANSACTIONPAYMENTTRANSUPDATE] TO [PublishersRole];
GO
GRANT EXECUTE ON [ext].[RETAILTRANSACTIONPAYMENTTRANSUPDATE] TO [DeployExtensibilityRole];
GO


IF OBJECT_ID(N'[ext].[RETAILTRANSACTIONPAYMENTTRANSDELETE]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[RETAILTRANSACTIONPAYMENTTRANSDELETE]
GO

CREATE PROCEDURE [ext].[RETAILTRANSACTIONPAYMENTTRANSDELETE]
    @tenderType  int,
    @lineNum int,
    @TransId  NVARCHAR(90)
AS
BEGIN
    SET NOCOUNT ON

     DELETE FROM
        [ax].[RETAILTRANSACTIONPAYMENTTRANS]
    WHERE
        TRANSACTIONID = @TransId and
        CHANGELINE = @lineNum and 
        TENDERTYPE = @tenderType
END;
GO

GRANT EXECUTE ON [ext].[RETAILTRANSACTIONPAYMENTTRANSDELETE] TO [UsersRole];
GO
GRANT EXECUTE ON [ext].[RETAILTRANSACTIONPAYMENTTRANSDELETE] TO [PublishersRole];
GO
GRANT EXECUTE ON [ext].[RETAILTRANSACTIONPAYMENTTRANSDELETE] TO [DeployExtensibilityRole];
GO