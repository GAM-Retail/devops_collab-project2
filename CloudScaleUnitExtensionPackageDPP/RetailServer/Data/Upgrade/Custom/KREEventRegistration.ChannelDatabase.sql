/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

IF (SELECT OBJECT_ID('[ext].[KREEventRegistrationHeader]')) IS NULL 
BEGIN
    CREATE TABLE
        [ext].[KREEventRegistrationHeader]
    (  
        [RECID] bigint NOT NULL,
        [EventId]     NVARCHAR(100) NOT NULL DEFAULT (('')),
        [EventName]    NVARCHAR(100) DEFAULT ((0)),
        [EffectiveDate] Date DEFAULT (('')),
        [ExpirationDate] Date DEFAULT (('')),
        [Status] NVARCHAR(100) DEFAULT (('')),
		[IsPurchaseProduct]NVARCHAR(100) DEFAULT (('')),
        [DATAAREAID] nvarchar(4),
        [OfferId] nvarchar(100)
        CONSTRAINT [I_KREEventRegistrationHeader] PRIMARY KEY CLUSTERED 
        (
            [RECID] ASC
        ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]

    ALTER TABLE [ext].[KREEventRegistrationHeader] WITH CHECK ADD CHECK (([RECID]<>(0)))
END
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KREEventRegistrationHeader] TO [DataSyncUsersRole]
GO

IF (SELECT OBJECT_ID('[ext].[KREEventRegistrationDetailChannel]')) IS NULL 
BEGIN
    CREATE TABLE
        [ext].[KREEventRegistrationDetailChannel]
    (  
        [RECID] bigint NOT NULL,
        [EventId]     NVARCHAR(100) NOT NULL DEFAULT (('')),
        [RetailChannelId]    NVARCHAR(100) DEFAULT ((0)),
        [RetailChannelName] NVARCHAR(100) DEFAULT (('')),
        [DATAAREAID] nvarchar(4)
        CONSTRAINT [I_KREEventRegistrationDetailChannel] PRIMARY KEY CLUSTERED 
        (
            [RECID] ASC
        ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]

    ALTER TABLE [ext].[KREEventRegistrationDetailChannel] WITH CHECK ADD CHECK (([RECID]<>(0)))
END
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KREEventRegistrationDetailChannel] TO [DataSyncUsersRole]
GO

IF (SELECT OBJECT_ID('[ext].[KREEventRegistrationDetailProducts]')) IS NULL 
BEGIN
    CREATE TABLE
        [ext].[KREEventRegistrationDetailProducts]
    (  
        [RECID] bigint NOT NULL,
        [EventId]     NVARCHAR(100) NOT NULL DEFAULT (('')),
        [RetailChannelId]    NVARCHAR(100) DEFAULT ((0)),
        [ItemId] NVARCHAR(100) DEFAULT (('')),
		[InfoCode] int DEFAULT ((0)),
        [DATAAREAID] nvarchar(4),
        [PRICE] numeric(32,16)
        CONSTRAINT [I_KREEventRegistrationDetailProducts] PRIMARY KEY CLUSTERED 
        (
            [RECID] ASC
        ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]

    ALTER TABLE [ext].[KREEventRegistrationDetailProducts] WITH CHECK ADD CHECK (([RECID]<>(0)))
END
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KREEventRegistrationDetailProducts] TO [DataSyncUsersRole]
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KREEventRegistrationDetailProducts] TO [UsersRole]
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KREEventRegistrationDetailProducts] TO [DeployExtensibilityRole]
GO

---view
IF (SELECT OBJECT_ID('[ext].[KREEventRegistrationDetailProductsView]')) IS NOT NULL
    DROP VIEW [ext].[KREEventRegistrationDetailProductsView]
GO

CREATE VIEW [ext].[KREEventRegistrationDetailProductsView] AS
(
    SELECT
        detail.RetailChannelId,
        detail.ItemId,
        detail.InfoCode,
        detail.Price,
        header.EventId,
        header.EventName,
        header.EffectiveDate,
        header.ExpirationDate,
        header.Status,
        header.IsPurchaseProduct,
        header.DATAAREAID,
        header.OfferId
    FROM
        [ext].KREEventRegistrationDetailProducts detail
    join [ext].KREEventRegistrationHeader header
    on Header.EventId = detail.EventId
)
GO

GRANT SELECT ON OBJECT::[ext].[KREEventRegistrationDetailProductsView] TO [UsersRole];
GO

GRANT SELECT ON OBJECT::[ext].[KREEventRegistrationDetailProductsView] TO [DeployExtensibilityRole];
GO